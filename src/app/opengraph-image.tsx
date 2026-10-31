import { ImageResponse } from "next/og";
export const alt = "Wisdom Shaibu. Applied AI and Backend Engineer.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f3f3ef",
          color: "#171917",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "64px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            justifyContent: "space-between",
          }}
        >
          <span>Wisdom Shaibu</span>
          <span style={{ color: "#2448ec" }}>
            Applied AI & Backend Engineer
          </span>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 94,
            letterSpacing: "-5px",
            lineHeight: 1.05,
            marginTop: 72,
          }}
        >
          <span>From model</span>
          <span>
            to working <span style={{ color: "#2448ec" }}>product.</span>
          </span>
        </div>
        <div style={{ display: "flex", marginTop: 46, fontSize: 22 }}>
          AI workflows · Backend systems · Cloud delivery
        </div>
      </div>
    ),
    size,
  );
}
