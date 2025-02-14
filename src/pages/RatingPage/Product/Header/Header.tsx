import cn from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';

import { declOfNum, formatMoney } from '@shared/lib/utils';
import { ProductModel } from '@shared/types/product';
import { Rating, Tag, Typography } from '@shared/ui';

import styles from './styles.module.scss';

interface Props {
  product: ProductModel;
  scrollToReview: () => void;
}

export const Header: FC<Props> = ({ product, scrollToReview }) => {
  return (
    <div className={styles.Header}>
      <div className={styles.LogoBlock}>
        <Image
          width={70}
          height={70}
          src={product.image}
          alt={product.title}
          className={styles.Image}
        />
        <div className={styles.TitleBlock}>
          <Typography variant="h3">{product.title}</Typography>
          <div className={styles.Tags}>
            {product.categories.map((item) => (
              <Tag variant="Secondary" key={item}>
                {item}
              </Tag>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.Info}>
        <div className={styles.InfoItem}>
          <div className={cn(styles.InfoTitle, styles.Price)}>
            <Typography variant="text18">
              {formatMoney(product.price)}
            </Typography>
            {product.oldPrice && (
              <Tag variant="Success" size="m">
                {formatMoney(product.price - product.oldPrice)}
              </Tag>
            )}
          </div>
          <Typography variant="text14">цена</Typography>
        </div>
        <div className={styles.InfoItem}>
          <div className={styles.InfoTitle}>
            <Typography variant="text18" component="span">
              {`${formatMoney(product.credit)}/мес`}
            </Typography>
          </div>
          <Typography variant="text14">в кредит</Typography>
        </div>
        <div className={styles.InfoItem}>
          <div className={styles.InfoTitle}>
            <Rating
              value={product.reviewAvg ?? product.initialRating}
              disabled
            />
          </div>
          <a href="#ref" onClick={scrollToReview}>
            <Typography variant="text14">
              {product.reviewCount}{' '}
              {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
            </Typography>
          </a>
        </div>
      </div>
    </div>
  );
};
