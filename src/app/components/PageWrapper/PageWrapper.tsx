import React, { FC, ReactNode } from 'react';

import { MenuProvider } from '@app/providers/MenuProvider';
import { MenuItem } from '@entities/Menu';
import { TopLevelCategory } from '@entities/Page';
import { MainLayout } from '@shared/layouts';
import { Footer } from '@widgets/Footer';
import { Sidebar } from '@widgets/Sidebar';

interface Props {
  children: ReactNode;
  firstCategory: TopLevelCategory;
  menu: MenuItem[];
}

export const PageWrapper: FC<Props> = ({ menu, firstCategory, children }) => {
  return (
    <MenuProvider menu={menu} firstCategory={firstCategory}>
      <MainLayout
        header={<div>header</div>}
        sidebar={<Sidebar />}
        content={children}
        footer={<Footer />}
      />
    </MenuProvider>
  );
};
