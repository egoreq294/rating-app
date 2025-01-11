import { notFound } from 'next/navigation';
import React, { FC } from 'react';

import { getMenu } from '@entities/Menu';
import { getPage } from '@entities/Page';
import { FIRST_LEVEL_MENU } from '@shared/constants/firstLevelMenu';

type Params = Promise<{ category: string; alias: string }>;

interface Props {
  params: Params;
}

export const generateStaticParams = async (): Promise<
  Array<{ category: string; alias: string }>
> => {
  const result = FIRST_LEVEL_MENU.reduce(async (promiseAcc, item) => {
    const acc = await promiseAcc;
    const menu = await getMenu(item.id);
    const result = menu
      .flatMap((item) => item.pages.map((page) => page.alias))
      .map((alias) => ({ category: item.route, alias }));
    return [...acc, ...result];
  }, [] as unknown as Promise<{ category: string; alias: string }[]>);

  return result;
};

const Page: FC<Props> = async ({ params }) => {
  const { alias } = await params;

  const page = await getPage(alias);

  if (!page) {
    notFound();
  }

  return <div>{JSON.stringify(page)}</div>;
};

export default Page;
