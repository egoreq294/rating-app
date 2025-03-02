import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { JSX } from 'react';

import './globals.css';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Rating',
  description: 'My Rating App',
  openGraph: {
    locale: 'ru_RU',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<JSX.Element> {
  return (
    <html lang="ru">
      <body className={notoSans.variable}>{children}</body>
    </html>
  );
}
