import { Metadata } from 'next';
import React, { FC } from 'react';

import { SearchPage } from '@pages/SearchPage';

export const metadata: Metadata = {
  title: 'Поиск по сайту',
};

const Page: FC = () => {
  return <SearchPage />;
};

export default Page;
