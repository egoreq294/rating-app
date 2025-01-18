import React, { FC } from 'react';

import { Tag, Typography } from '@shared/ui';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  skills: string[];
}

export const Skills: FC<Props> = ({ className, skills }) => {
  return (
    <div className={className}>
      <Typography variant="h2" className={styles.Title}>
        Получаемые навыки
      </Typography>

      {skills.map((item) => (
        <Tag key={item} variant="Primary" className={styles.Tag}>
          {item}
        </Tag>
      ))}
    </div>
  );
};
