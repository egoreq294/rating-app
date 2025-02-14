import cn from 'classnames';
import React, { FC, useRef, useState } from 'react';

import { ProductModel } from '@shared/types/product';
import { Card } from '@shared/ui';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';
import { Review } from './Review';

import styles from './styles.module.scss';

interface Props {
  product: ProductModel;
  className?: string;
}

export const Product: FC<Props> = ({ className, product }) => {
  const [isReviewOpened, setIsReviewOpened] = useState(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const scrollToReview = (): void => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={className}>
      <Card
        className={cn(styles.Card, {
          [styles.ProductWithReview]: isReviewOpened,
        })}
      >
        <Header product={product} scrollToReview={scrollToReview} />
        <Body product={product} />
        <Footer
          isReviewOpened={isReviewOpened}
          setIsReviewOpened={setIsReviewOpened}
        />
      </Card>
      <Card
        variant="Secondary"
        className={cn(styles.Card, styles.Review, {
          [styles.ReviewClosed]: !isReviewOpened,
        })}
        ref={reviewRef}
      >
        <Review reviews={product.reviews} productId={product._id} />
      </Card>
    </div>
  );
};
