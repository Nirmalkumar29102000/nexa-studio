import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexa Studio | Digital Design & Development Agency",
  description:
    "Nexa Studio creates bold digital experiences through design, development, branding, and strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}