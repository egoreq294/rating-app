import React, { FC, Suspense } from 'react';

export const RatingPage: FC = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>
      <div>RatingPage</div>
    </Suspense>
  );
};
