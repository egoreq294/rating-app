import cn from 'classnames';
import React, { FC, KeyboardEventHandler } from 'react';

import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Input } from '../Input';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

export const Search: FC<Props> = ({ className, value, onChange, onSubmit }) => {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && value) {
      onSubmit(value);
    }
  };

  return (
    <div className={cn(styles.Search, className)}>
      <Input
        placeholder="Поиск"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        className={styles.Input}
      />
      <IconButton
        variant="Primary"
        className={styles.Button}
        onClick={() => {
          onSubmit(value);
        }}
      >
        <Icon name="Search" width={20} height={20} />
      </IconButton>
    </div>
  );
};
