import React, { FC } from 'react';

import { ProductModel } from '@shared/types/product';
import { Typography } from '@shared/ui';

import styles from './styles.module.scss';

interface Props {
  product: ProductModel;
}

export const Body: FC<Props> = ({ product }) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Description}>
        <Typography variant="text16">{product.description}</Typography>
      </div>
      <div className={styles.Info}>
        <dl>
          {product.characteristics.map((item) => (
            <div className={styles.DescriptionItem} key={item.name}>
              <dt className={styles.DescriptionTerm}>
                <Typography variant="textBold16">{item.name}</Typography>
              </dt>
              <dd>
                <Typography variant="text16">{item.value}</Typography>
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className={styles.Aspects}>
        {product.advantages && (
          <div className={styles.Advantages}>
            <Typography variant="textBold16">Преимущества</Typography>
            <Typography variant="text14">{product.advantages}</Typography>
          </div>
        )}
        {product.disadvantages && (
          <div className={styles.Disadvantages}>
            <Typography variant="textBold16">Недостатки</Typography>
            <Typography variant="text14">{product.disadvantages}</Typography>
          </div>
        )}
      </div>
    </div>
  );
};
