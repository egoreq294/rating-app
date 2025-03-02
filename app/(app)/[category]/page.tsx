import { Metadata } from 'next';
import React, { FC } from 'react';

import { CategoryPage } from '@pages/CategoryPage';
import { FIRST_LEVEL_MENU } from '@shared/constants/firstLevelMenu';

type Params = Promise<{ category: string }>;

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const { category } = await params;

  const firstLevelMenu = FIRST_LEVEL_MENU.find(
    (item) => item.route === category,
  )!;

  return {
    title: firstLevelMenu?.name || 'Rating',
  };
};

interface Props {
  params: Promise<{ category: string }>;
}

const Page: FC<Props> = async () => {
  return <CategoryPage />;
};

export default Page;
