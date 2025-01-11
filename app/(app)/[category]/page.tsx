import React, { FC } from 'react';

interface Props {
  params: Promise<{ category: string }>;
}

const Page: FC<Props> = async ({ params }) => {
  const { category } = await params;

  return <div>{category}</div>;
};

export default Page;
