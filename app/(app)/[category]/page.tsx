import React, { FC } from 'react';

import { CategoryPage } from '@pages/CategoryPage';

interface Props {
  params: Promise<{ category: string }>;
}

const Page: FC<Props> = async () => {
  return <CategoryPage />;
};

export default Page;
