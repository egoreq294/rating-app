import React, { FC } from 'react';

import { Button } from '@shared/ui';

import styles from './styles.module.scss';

export const Footer: FC = () => {
  return (
    <div className={styles.Footer}>
      <Button className={styles.Button} variant="Primary">
        Узнать подробнее
      </Button>
      <Button className={styles.Button} variant="Secondary">
        Читать отзывы
      </Button>
    </div>
  );
};
