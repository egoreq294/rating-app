import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import { JSX } from "react";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Rating",
  description: "My Rating App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ru">
      <body className={notoSans.variable}>{children}</body>
    </html>
  );
}
