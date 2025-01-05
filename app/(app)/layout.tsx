import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { JSX } from 'react';

import { MainLayout } from '@shared/layouts';
import { Footer } from '@widgets/Footer';

import '../globals.css';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Rating',
  description: 'My Rating App',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="ru">
      <body className={notoSans.variable}>
        <MainLayout
          header={<div>header</div>}
          sidebar={<div>sidebar</div>}
          content={children}
          footer={<Footer />}
        />
      </body>
    </html>
  );
}
