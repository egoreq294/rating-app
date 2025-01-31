import cn from 'classnames';
import React, { FC } from 'react';

import { ProductModel } from '@shared/types/product';
import { Card } from '@shared/ui';
import { Body } from './Body';
import { Footer } from './Footer';
import { Header } from './Header';

import styles from './styles.module.scss';

interface Props {
  product: ProductModel;
  className?: string;
}

export const Product: FC<Props> = ({ className, product }) => {
  return (
    <Card className={cn(styles.Product, className)}>
      <Header product={product} />
      <Body product={product} />
      <Footer />
    </Card>
  );
};
