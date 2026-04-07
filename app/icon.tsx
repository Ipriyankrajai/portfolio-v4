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
          background: "#0a0a0a",
          borderRadius: 6,
          border: "2px solid #737373",
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 700,
            color: "#f5f5f5",
            fontFamily: "monospace",
            lineHeight: 1,
          }}
        >
          P
        </span>
      </div>
    ),
    {
      ...size,
    }
  );
}
