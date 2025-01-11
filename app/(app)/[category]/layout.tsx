import { notFound } from 'next/navigation';
import React, { FC, ReactNode } from 'react';

import { PageWrapper } from '@app/components';
import { getMenu } from '@entities/Menu';
import { FIRST_LEVEL_MENU } from '@shared/constants/firstLevelMenu';

type Params = Promise<{ category: string; alias: string }>;

interface Props {
  params: Params;
  children: ReactNode;
}

const Layout: FC<Props> = async ({ params, children }) => {
  const { category } = await params;

  if (!FIRST_LEVEL_MENU.find((item) => item.route === category)) {
    notFound();
  }

  const firstLevelMenu = FIRST_LEVEL_MENU.find(
    (item) => item.route === category,
  )!;

  const menu = await getMenu(firstLevelMenu.id);

  if (!menu.length) {
    notFound();
  }

  return (
    <PageWrapper menu={menu} firstCategory={firstLevelMenu.id}>
      {children}
    </PageWrapper>
  );
};

export default Layout;
