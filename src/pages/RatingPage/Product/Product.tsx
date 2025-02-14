import cn from 'classnames';
import React, { FC, useState } from 'react';

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

  return (
    <div className={className}>
      <Card
        className={cn(styles.Card, {
          [styles.ProductWithReview]: isReviewOpened,
        })}
      >
        <Header product={product} />
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
      >
        <Review reviews={product.reviews} productId={product._id} />
      </Card>
    </div>
  );
};
