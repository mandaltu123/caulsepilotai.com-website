import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

export const metadata: Metadata = {
  title: "CausePilot AI | Enterprise AI Infrastructure",
  description:
    "CausePilot AI designs and deploys production-ready AI systems that transform enterprise data into intelligent products.",
  keywords: [
    "AI consulting",
    "RAG systems",
    "enterprise AI",
    "AI architecture",
    "AI infrastructure"
  ],
  metadataBase: new URL("https://caulsepilotai.com"),
  openGraph: {
    title: "CausePilot AI",
    description:
      "AI infrastructure and RAG platforms for enterprise knowledge systems.",
    url: "https://caulsepilotai.com",
    siteName: "CausePilot AI",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
