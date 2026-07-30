import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    background: "#100E15",
                    color: "#F7F5EF",
                    fontFamily: "sans-serif",
                }}
            >
                <div style={{ display: "flex", fontSize: 22, color: "#E8503A", fontWeight: 700, marginBottom: 20 }}>
                    FULL-STACK DEVELOPER
                </div>
                <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
                    I build products,
                </div>
                <div style={{ display: "flex", fontSize: 64, fontWeight: 800, lineHeight: 1.1 }}>
                    not tutorials.
                </div>
                <div style={{ display: "flex", fontSize: 24, color: "#9B96A8", marginTop: 30 }}>
                    Goodluck Michael — goodluck-portfolio.vercel.app
                </div>
            </div>
        ),
        { ...size }
    );
}