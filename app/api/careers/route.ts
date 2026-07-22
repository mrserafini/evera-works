import { NextResponse } from "next/server";

import { sendCareersApplication } from "@/lib/resend";

const MAX_CV_BYTES = 5 * 1024 * 1024; // 5MB
const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const str = (v: FormDataEntryValue | null) =>
  typeof v === "string" ? v.trim() : "";

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 },
    );
  }

  // Honeypot: bots fill the hidden field → pretend success, send nothing.
  if (str(form.get("company_website"))) {
    return NextResponse.json({ success: true, message: "OK" });
  }

  const name = str(form.get("name"));
  const email = str(form.get("email"));
  const phone = str(form.get("phone"));
  const role = str(form.get("role"));
  const message = str(form.get("message"));
  const cv = form.get("cv");

  if (
    name.length < 2 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !role
  ) {
    return NextResponse.json(
      { success: false, error: "Validation failed" },
      { status: 400 },
    );
  }

  if (!(cv instanceof File) || cv.size === 0) {
    return NextResponse.json(
      { success: false, error: "CV is required" },
      { status: 400 },
    );
  }
  if (!ALLOWED_CV_TYPES.has(cv.type)) {
    return NextResponse.json(
      { success: false, error: "Invalid CV file type" },
      { status: 400 },
    );
  }
  if (cv.size > MAX_CV_BYTES) {
    return NextResponse.json(
      { success: false, error: "CV file too large" },
      { status: 400 },
    );
  }

  try {
    const content = Buffer.from(await cv.arrayBuffer());
    await sendCareersApplication(
      { name, email, phone, role, message },
      { filename: cv.name, content },
    );
    return NextResponse.json({
      success: true,
      message: "Application sent successfully",
    });
  } catch (error) {
    console.error("[careers] Failed to send application:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send application" },
      { status: 500 },
    );
  }
}
