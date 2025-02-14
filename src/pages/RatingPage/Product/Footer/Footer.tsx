import React, { Dispatch, FC, SetStateAction } from 'react';

import { Button, Icon } from '@shared/ui';

import styles from './styles.module.scss';

interface Props {
  isReviewOpened: boolean;
  setIsReviewOpened: Dispatch<SetStateAction<boolean>>;
}

export const Footer: FC<Props> = ({ isReviewOpened, setIsReviewOpened }) => {
  return (
    <div className={styles.Footer}>
      <Button className={styles.Button} variant="Primary">
        Узнать подробнее
      </Button>
      <Button
        className={styles.Button}
        variant="Secondary"
        onClick={() => {
          setIsReviewOpened((prev) => !prev);
        }}
      >
        Читать отзывы
        <Icon
          name={isReviewOpened ? 'ChevronDown' : 'ChevronRight'}
          width={20}
          height={20}
        />
      </Button>
    </div>
  );
};
