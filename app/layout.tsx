import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Serif, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anil Yadav — Strategy, AI & Transformation",
  description:
    "IIM Bangalore MBA Co’27 · PMP® · Ex-Amazon · Ex-Indian Army. Business strategy and AI-led transformation across Defence, FinTech, and Automotive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${instrument.variable} ${plex.variable} relative antialiased`}>
        <div className="grid-bg" aria-hidden />
        <div className="noise" aria-hidden />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
