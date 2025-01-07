import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';
import { JSX } from 'react';

import { PageWrapper } from '@app/components/PageWrapper/PageWrapper';
import { getMenu } from '@entities/Menu';
import { MainLayout } from '@shared/layouts';
import { Footer } from '@widgets/Footer';
import { Sidebar } from '@widgets/Sidebar';

import '../globals.css';

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Rating',
  description: 'My Rating App',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<JSX.Element> {
  const menu = await getMenu(0);

  return (
    <html lang="ru">
      <body className={notoSans.variable}>
        <PageWrapper menu={menu} firstCategory={0}>
          <MainLayout
            header={<div>header</div>}
            sidebar={<Sidebar />}
            content={children}
            footer={<Footer />}
          />
        </PageWrapper>
      </body>
    </html>
  );
}
