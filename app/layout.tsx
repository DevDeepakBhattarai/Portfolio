import { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const description =
  "Full-stack web and AI engineer and Co-Founder & CTO at ALLWEONE. Building websites and AI products that are more than just functional — from AI workspaces and local MCP servers to Next.js, TypeScript, Python, and PostgreSQL systems.";
const ogImageURL = "/deepak-opengraph.jpg";
const title = "Deepak Bhattarai";
export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  metadataBase: new URL("https://deepak-bhattarai.com.np"),
  description: description,
  authors: [{ name: "Deepak Bhattarai" }],
  category: "Portfolio",
  creator: "Deepak Bhattarai",
  keywords: [
    "Deepak Bhattarai",
    "ALLWEONE",
    "Portfolio Website",
    "AI Developer",
    "Full Stack AI Engineer",
    "Web Developer",
    "Nepali Web Developer",
    "Next.js Developer",
    "React Developer",
    "Agentic Engineering",
    "MCP",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: title,
    images: { url: ogImageURL, alt: `Image of ${title}` },
    description: description,
    type: "profile",
  },
  twitter: {
    images: { url: ogImageURL, alt: `Image of ${title}` },
    title: title,
    description: description,
    creator: "@nerd_deepak",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
