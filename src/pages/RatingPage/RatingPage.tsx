'use client';

import React, { FC, useMemo, useState } from 'react';

import { TopLevelCategory } from '@shared/constants/topLevelCategory';
import { TopPageModel } from '@shared/types/page';
import { ProductModel } from '@shared/types/product';
import { Sort, SortItem, SortState, Tag, Typography } from '@shared/ui';
import { Advantages } from './Advantages';
import { Product } from './Product';
import { Skills } from './Skills';
import { getSortedProducts } from './utils';
import { Vacancies } from './Vacancies';

import styles from './styles.module.scss';

export enum SortEnum {
  Rating = 'RATING',
  Price = 'PRICE',
}

const SORT_ITEMS: Array<SortItem<SortEnum>> = [
  { label: 'По рейтингу', value: SortEnum.Rating },
  { label: 'По цене', value: SortEnum.Price },
];

interface Props {
  page: TopPageModel;
  products: ProductModel[];
  firstLevelCategory: TopLevelCategory;
}

export const RatingPage: FC<Props> = ({
  page,
  products,
  firstLevelCategory,
}) => {
  const [sortState, setSortState] = useState<SortState<SortEnum>>({
    value: SortEnum.Rating,
    direction: 'desc',
  });

  const { value, direction } = sortState;

  const sortedProducts = useMemo(
    () => getSortedProducts({ products, sort: value, direction }),
    [value, direction, products],
  );

  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <Typography variant="h1" className={styles.Title}>
          {page.title}
        </Typography>
        {!!sortedProducts.length && (
          <Tag
            variant="Info"
            size="m"
            className={styles.Tag}
            aria-label={`${products.length} элементов`}
          >
            {sortedProducts.length}
          </Tag>
        )}
        <Sort<SortEnum>
          items={SORT_ITEMS}
          sort={sortState}
          setSort={setSortState}
        />
      </div>
      <ul className={styles.ProductsBlock}>
        {!!sortedProducts.length &&
          sortedProducts.map((item) => (
            <li key={item._id}>
              <Product product={item} />
            </li>
          ))}
      </ul>
      {page.hh && firstLevelCategory === TopLevelCategory.Courses && (
        <Vacancies title={page.category} source="hh.ru" vacancies={page.hh} />
      )}
      {!!page.advantages?.length && <Advantages advantages={page.advantages} />}
      {page.seoText && (
        <div
          className={styles.Seo}
          // ТАК ДЕЛАТЬ ЗАПРЕЩЕНО ЗАКОНОМ ВСЕХ СТРАН, если уж очень надо так сделать - санитизируем
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Skills skills={page.tags} />
    </div>
  );
};
