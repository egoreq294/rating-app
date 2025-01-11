import React, { FC, Suspense } from 'react';

export const CategoryPage: FC = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <div>CategoryPage</div>
    </Suspense>
  );
};
