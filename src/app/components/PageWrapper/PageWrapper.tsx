import React, { FC, ReactNode } from 'react';

import { MenuProvider } from '@app/providers/MenuProvider';
import { MenuItem } from '@entities/Menu';
import { TopLevelCategory } from '@entities/Page';

interface Props {
  children: ReactNode;
  firstCategory: TopLevelCategory;
  menu: MenuItem[];
}

export const PageWrapper: FC<Props> = ({ menu, firstCategory, children }) => {
  return (
    <MenuProvider menu={menu} firstCategory={firstCategory}>
      {children}
    </MenuProvider>
  );
};
