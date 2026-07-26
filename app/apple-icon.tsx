import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #040b14 0%, #07111f 100%)",
          borderRadius: "36px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "52px",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#ffffff",
            lineHeight: 1,
          }}
        >
          N<span style={{ color: "#00aeef" }}>W</span>
        </p>
        <p
          style={{
            margin: "10px 0 0",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "#5ccfff",
          }}
        >
          Creator
        </p>
      </div>
    ),
    {
      ...size,
    },
  );
}
