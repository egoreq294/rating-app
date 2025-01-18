import React, { FC } from 'react';

import { TopPageAdvantage } from '@shared/types/page';
import { Icon, Typography } from '@shared/ui';

import styles from './styles.module.scss';

interface Props {
  advantages: TopPageAdvantage[];
  className?: string;
}

export const Advantages: FC<Props> = ({ advantages, className }) => {
  return (
    <div className={className}>
      <Typography variant="h2" className={styles.Title}>
        Преимущества
      </Typography>
      <div>
        {advantages.map((item) => (
          <div key={item._id} className={styles.Advantage}>
            <Icon width={50} height={50} name="Success" />
            <Typography variant="textBold20" className={styles.ItemTitle}>
              {item.title}
            </Typography>
            <hr className={styles.Hr} />
            <Typography variant="text18">{item.description}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};
