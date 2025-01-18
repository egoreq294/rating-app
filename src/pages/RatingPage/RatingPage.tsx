import React, { FC } from 'react';

import { TopLevelCategory } from '@shared/constants/topLevelCategory';
import { TopPageModel } from '@shared/types/page';
import { ProductModel } from '@shared/types/product';
import { Tag, Typography } from '@shared/ui';
import { Advantages } from './Advantages';
import { Skills } from './Skills';
import { Vacancies } from './Vacancies';

import styles from './styles.module.scss';

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
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Header}>
        <Typography variant="h1" className={styles.Title}>
          {page.title}
        </Typography>
        {!!products.length && (
          <Tag variant="Info" size="m" className={styles.Tag}>
            {products.length}
          </Tag>
        )}
        <span className={styles.Sort}>Сортировка</span>
      </div>
      <div>
        {!!products.length &&
          products.map((item) => <div key={item._id}>{item.title}</div>)}
      </div>
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
