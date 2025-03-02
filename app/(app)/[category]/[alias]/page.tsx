import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import React, { FC } from 'react';

import { getMenu } from '@entities/Menu';
import { getPage } from '@entities/Page';
import { getProducts } from '@entities/Product';
import { RatingPage } from '@pages/RatingPage';
import { FIRST_LEVEL_MENU } from '@shared/constants/firstLevelMenu';

type Params = Promise<{ category: string; alias: string }>;

interface Props {
  params: Params;
}

export const generateMetadata = async ({
  params,
}: {
  params: Params;
}): Promise<Metadata> => {
  const { alias } = await params;
  const page = await getPage(alias);

  return {
    title: page?.metaTitle,
    description: page?.metaDescription,
    openGraph: {
      title: page?.metaTitle,
      description: page?.metaDescription,
      type: 'article',
    },
  };
};

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
  const { alias, category } = await params;

  const page = await getPage(alias);
  const products = await getProducts(page?.category || '', 10);

  const firstLevelMenu = FIRST_LEVEL_MENU.find(
    (item) => item.route === category,
  )!;

  if (!page || !products) {
    notFound();
  }

  return (
    <RatingPage
      page={page}
      products={products}
      firstLevelCategory={firstLevelMenu.id}
    />
  );
};

export default Page;
