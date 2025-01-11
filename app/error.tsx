'use client';

import { FC } from 'react';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error: FC<Props> = ({ error }) => {
  return (
    <>
      <div>Что то пошло не так</div>
      <div>{JSON.stringify(error)}</div>
    </>
  );
};

export default Error;
