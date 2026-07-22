import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title")?.slice(0, 120) || "EVERA WORKS";
  const description =
    searchParams.get("description")?.slice(0, 160) ||
    "Expert teams that power your operations";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0B1628",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 34, fontWeight: 800, color: "white" }}>
          EVERA<span style={{ color: "#00B5D4" }}>&nbsp;WORKS</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 68,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            {title}
          </div>
          <div style={{ marginTop: 24, fontSize: 30, color: "rgba(255,255,255,0.7)" }}>
            {description}
          </div>
        </div>
        <div style={{ display: "flex", height: 10, width: 180, background: "#00B5D4", borderRadius: 9999 }} />
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
