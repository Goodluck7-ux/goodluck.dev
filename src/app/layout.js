import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";
import Script from "next/script";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL("https://goodluck-portfolio.vercel.app"),
  title: {
    default: "Goodluck Michael — Full-Stack Developer",
    template: "%s — Goodluck Michael",
  },
  description:
    "Full-stack developer building real, production-shaped software with Next.js, MongoDB, and AI integrations — not tutorials.",
  keywords: ["full-stack developer", "Next.js developer", "React developer", "freelance developer", "Nigeria"],
  openGraph: {
    title: "Goodluck Michael — Full-Stack Developer",
    description: "I build products, not tutorials.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Goodluck Michael — Full-Stack Developer",
    description: "I build products, not tutorials.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem("theme");
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                if (stored === "dark" || (!stored && prefersDark)) {
                  document.documentElement.classList.add("dark");
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        className={`${bricolage.variable} ${inter.variable} ${jetbrainsMono.variable} font-body antialiased`}
      >
        <ScrollProgress />
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}