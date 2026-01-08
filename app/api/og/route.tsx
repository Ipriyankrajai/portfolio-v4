import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

const SIZE = {
  width: 1200,
  height: 630,
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title = searchParams.get("title") || "Blog";
  const description = searchParams.get("description") || "";
  const tags = searchParams.get("tags") || "";
  const date = searchParams.get("date") || "";

  // Load Geist font
  const geistSemiBold = await fetch(
    new URL(
      "https://github.com/vercel/geist-font/raw/main/packages/next/dist/fonts/geist-sans/Geist-SemiBold.ttf"
    )
  ).then((res) => res.arrayBuffer());

  const geistRegular = await fetch(
    new URL(
      "https://github.com/vercel/geist-font/raw/main/packages/next/dist/fonts/geist-sans/Geist-Regular.ttf"
    )
  ).then((res) => res.arrayBuffer());

  const tagList = tags ? tags.split(",").map((t) => t.trim()) : [];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #262626 100%)",
          fontFamily: "Geist",
        }}
      >
        {/* Top section with date */}
        {date && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div
              style={{
                color: "#a3a3a3",
                fontSize: "20px",
                fontWeight: 400,
              }}
            >
              {date}
            </div>
          </div>
        )}

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            flex: 1,
            justifyContent: "center",
          }}
        >
          {/* Title */}
          <div
            style={{
              fontSize: "56px",
              fontWeight: 600,
              color: "#fafafa",
              lineHeight: 1.2,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
              maxWidth: "100%",
            }}
          >
            {title}
          </div>

          {/* Description */}
          {description && (
            <div
              style={{
                fontSize: "24px",
                fontWeight: 400,
                color: "#a3a3a3",
                lineHeight: 1.4,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "100%",
              }}
            >
              {description}
            </div>
          )}

          {/* Tags */}
          {tagList.length > 0 && (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                marginTop: "8px",
              }}
            >
              {tagList.slice(0, 4).map((tag) => (
                <div
                  key={tag}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    borderRadius: "6px",
                    padding: "8px 16px",
                    fontSize: "16px",
                    color: "#d4d4d4",
                    fontWeight: 400,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with site name */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            {/* Gradient accent bar */}
            <div
              style={{
                width: "4px",
                height: "32px",
                background: "linear-gradient(180deg, #fafafa 0%, #737373 100%)",
                borderRadius: "2px",
              }}
            />
            <div
              style={{
                fontSize: "22px",
                fontWeight: 600,
                color: "#fafafa",
              }}
            >
              priyankrajai.com
            </div>
          </div>

          {/* Decorative gradient circle */}
          {/* <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          /> */}
        </div>
      </div>
    ),
    {
      ...SIZE,
      fonts: [
        {
          name: "Geist",
          data: geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: geistSemiBold,
          style: "normal",
          weight: 600,
        },
      ],
    }
  );
}
