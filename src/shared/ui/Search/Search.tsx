import cn from 'classnames';
import React, { FC, KeyboardEventHandler } from 'react';

import { Icon } from '../Icon';
import { IconButton } from '../IconButton';
import { Input } from '../Input';

import styles from './styles.module.scss';

interface Props {
  containerClassName?: string;
  className?: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

export const Search: FC<Props> = ({
  className,
  containerClassName,
  value,
  onChange,
  onSubmit,
}) => {
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter' && value) {
      onSubmit(value);
    }
  };

  return (
    <div className={cn(styles.Search, containerClassName)}>
      <Input
        placeholder="Поиск"
        value={value}
        onChange={(value) => {
          onChange(value);
        }}
        onKeyDown={handleKeyDown}
        className={styles.Input}
        containerClassName={className}
      />
      <IconButton
        variant="Primary"
        className={styles.Button}
        size="S"
        onClick={() => {
          onSubmit(value);
        }}
      >
        <Icon name="Search" width={20} height={20} />
      </IconButton>
    </div>
  );
};
