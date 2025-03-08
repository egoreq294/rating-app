'use client';

import { useRouter } from 'next/navigation';
import React, { FC } from 'react';

import { Button, Card, Typography } from '@shared/ui';

import styles from './styles.module.scss';

export const NotFoundPage: FC = () => {
  const router = useRouter();

  return (
    <div className={styles.Wrapper}>
      <Card className={styles.Card}>
        <Typography variant="h3">Страница не найдена</Typography>
        <Button
          variant="Primary"
          onClick={() => {
            router.push('/');
          }}
        >
          Вернуться на главную
        </Button>
      </Card>
    </div>
  );
};
