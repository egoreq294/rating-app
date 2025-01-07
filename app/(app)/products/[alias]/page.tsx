import { notFound } from 'next/navigation';
import React, { FC } from 'react';

import { getMenu } from '@entities/Menu';
import { getPage } from '@entities/Page';

type Params = Promise<{ alias: string }>;

interface Props {
  params: Params;
}

export const generateStaticParams = async (): Promise<
  Array<{ alias: string }>
> => {
  const menu = await getMenu(0);
  return menu.flatMap((item) =>
    item.pages.map((page) => ({ alias: page.alias })),
  );
};

const Products: FC<Props> = async ({ params }) => {
  const { alias } = await params;

  const page = await getPage(alias);

  if (!page) {
    notFound();
  }

  return <div>{JSON.stringify(page)}</div>;
};

export default Products;
