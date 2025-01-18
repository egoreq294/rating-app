import React, { FC, ReactNode } from 'react';

import { PageWrapper } from '@app/components';
import { getMenu } from '@entities/Menu';
import { TopLevelCategory } from '@shared/constants/topLevelCategory';

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = async ({ children }) => {
  const menu = await getMenu(TopLevelCategory.Courses);

  return (
    <PageWrapper menu={menu} firstCategory={TopLevelCategory.Courses}>
      {children}
    </PageWrapper>
  );
};

export default Layout;
