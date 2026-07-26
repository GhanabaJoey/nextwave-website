import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#07111f",
          borderRadius: "8px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "3px",
            height: "18px",
          }}
        >
          <div
            style={{
              width: "4px",
              height: "10px",
              borderRadius: "999px",
              background: "#00aeef",
            }}
          />
          <div
            style={{
              width: "4px",
              height: "16px",
              borderRadius: "999px",
              background: "#5ccfff",
            }}
          />
          <div
            style={{
              width: "4px",
              height: "12px",
              borderRadius: "999px",
              background: "#00aeef",
            }}
          />
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
