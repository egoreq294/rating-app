'use client';

import React, { FC, ReactNode } from 'react';

import { MenuProvider } from '@app/providers/MenuProvider';
import { TopLevelCategory } from '@shared/constants/topLevelCategory';
import { MainLayout } from '@shared/layouts';
import { MenuItem } from '@shared/types/menu';
import { Footer } from '@widgets/Footer';
import { ScrollToTopButton } from '@widgets/ScrollToTopButton';
import { Sidebar } from '@widgets/Sidebar';

import styles from './styles.module.scss';

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
      <ScrollToTopButton className={styles.ScrollToTopButton} />
    </MenuProvider>
  );
};
