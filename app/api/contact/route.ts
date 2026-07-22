import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/resend";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid request body" },
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { success: false, error: "Validation failed" },
      { status: 400 },
    );
  }

  // Honeypot: a bot filled the hidden field. Pretend success, send nothing.
  if (result.data.company_website) {
    return NextResponse.json({ success: true, message: "OK" });
  }

  try {
    await sendContactEmail(result.data, result.data.locale);
    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("[contact] Failed to send email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 },
    );
  }
}
