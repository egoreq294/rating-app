import cn from 'classnames';
import dayjs from 'dayjs';
import React, { FC } from 'react';

import { Typography } from '@shared/ui';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

export const Footer: FC<Props> = ({ className }) => {
  return (
    <footer className={cn(styles.Footer, className)}>
      <Typography variant="text16">
        Rating App © 2024 - {dayjs().year()} Все права защищены
      </Typography>
      <a href="#" target="_blank" className={styles.Link}>
        <Typography variant="text16">Пользовательское соглашение</Typography>
      </a>
      <a href="#" target="_blank" className={styles.Link}>
        <Typography variant="text16">Политика конфиденциальности</Typography>
      </a>
    </footer>
  );
};
