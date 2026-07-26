import { siteConfig } from "@/content/site";

export const ogImageSize = {
  width: 1200,
  height: 630,
};

export function OgImageContent() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "72px 80px",
        background: "linear-gradient(145deg, #040b14 0%, #07111f 55%, #0c1829 100%)",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            width: "6px",
            height: "48px",
            borderRadius: "999px",
            background: "#00aeef",
          }}
        />
        <p
          style={{
            margin: 0,
            fontSize: "22px",
            fontWeight: 700,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: "#5ccfff",
          }}
        >
          Creator Network
        </p>
      </div>
      <p
        style={{
          margin: 0,
          fontSize: "88px",
          fontWeight: 800,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
        }}
      >
        Next
        <span style={{ color: "#00aeef" }}>Wave</span>
      </p>
      <p
        style={{
          margin: "28px 0 0",
          maxWidth: "760px",
          fontSize: "30px",
          lineHeight: 1.45,
          color: "#8faec4",
        }}
      >
        A creator community helping LIVE creators develop their skills, connect
        with others and unlock more opportunities.
      </p>
      <p
        style={{
          margin: "36px 0 0",
          fontSize: "18px",
          fontWeight: 700,
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "#ffd700",
        }}
      >
        {siteConfig.name}
      </p>
    </div>
  );
}
