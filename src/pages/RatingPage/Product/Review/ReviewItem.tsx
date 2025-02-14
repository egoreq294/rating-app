import 'dayjs/locale/ru';
import dayjs from 'dayjs';
import React, { FC } from 'react';

import { ReviewModel } from '@shared/types/product';
import { Icon, Rating, Typography } from '@shared/ui';

import styles from './styles.module.scss';

interface Props {
  review: ReviewModel;
}

export const ReviewItem: FC<Props> = ({ review }) => {
  const { name, title, description, createdAt, rating } = review;

  return (
    <div className={styles.ReviewItem}>
      <Icon width={30} height={30} name="Avatar" className={styles.Avatar} />
      <div className={styles.Title}>
        <Typography
          variant="textBold14"
          component="span"
        >{`${name}: `}</Typography>
        <Typography variant="text14" component="span">
          {title}
        </Typography>
      </div>
      <Typography variant="text14" className={styles.Date}>
        {dayjs(createdAt).locale('ru').format('DD MMMM YYYY')}
      </Typography>
      <Rating value={rating} disabled className={styles.Rating} />
      <Typography variant="text14" className={styles.Description}>
        {description}
      </Typography>
    </div>
  );
};
