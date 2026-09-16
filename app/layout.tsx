import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anil Yadav — Strategy, AI & Transformation",
  description:
    "IIM Bangalore MBA Co’27 · PMP® · Ex-Amazon · Ex-Indian Army. Business strategy and AI-led transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="grid-bg" aria-hidden />
        <div className="noise" aria-hidden />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
