import React, { FC } from 'react';

import { ReviewModel } from '@shared/types/product';
import { ReviewForm } from './ReviewForm';
import { ReviewItem } from './ReviewItem';

import styles from './styles.module.scss';

interface Props {
  reviews: ReviewModel[];
  productId: string;
  isOpened: boolean;
}

export const Review: FC<Props> = ({ reviews, productId, isOpened }) => {
  return (
    <>
      {reviews.map((review) => (
        <div key={review._id}>
          <ReviewItem review={review} />
          <hr className={styles.Hr} />
        </div>
      ))}
      <ReviewForm productId={productId} isOpened={isOpened} />
    </>
  );
};
