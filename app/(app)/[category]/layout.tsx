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

  const firstLevelMenu = FIRST_LEVEL_MENU.find(
    (item) => item.route === category,
  )!;

  const menu = await getMenu(firstLevelMenu.category);

  return (
    <PageWrapper menu={menu} firstCategory={firstLevelMenu.category}>
      {children}
    </PageWrapper>
  );
};

export default Layout;
