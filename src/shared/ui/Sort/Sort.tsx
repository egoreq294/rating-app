'use client';

import cn from 'classnames';
import React, { JSX } from 'react';

import { Icon } from '../Icon';
import { Typography } from '../Typography';

import styles from './styles.module.scss';

export type SortDirection = 'asc' | 'desc';

export interface SortItem<T> {
  label: string;
  value: T;
}

export interface SortState<T> {
  value: T;
  direction: SortDirection;
}

interface Props<T> {
  items: Array<SortItem<T>>;
  sort: SortState<T>;
  setSort: (sort: SortState<T>) => void;
  className?: string;
}
export const Sort = <T extends string>({
  items,
  setSort,
  sort,
  className,
}: Props<T>): JSX.Element => {
  return (
    <div className={cn(styles.Sort, className)}>
      {items.map((item) => (
        <button
          key={item.value}
          className={cn(styles.Button, {
            [styles.Active]: sort.value === item.value,
          })}
          onClick={() => {
            const nextDirection = sort.direction === 'asc' ? 'desc' : 'asc';
            setSort({
              value: item.value,
              direction: sort.value !== item.value ? 'desc' : nextDirection,
            });
          }}
          aria-selected={sort.value === item.value}
          aria-label={`Сортировка ${sort.direction} ${item.label}`}
        >
          {sort.value === item.value && (
            <Icon
              name={sort.direction === 'asc' ? 'SortAsc' : 'SortDesc'}
              width={24}
              height={24}
            />
          )}
          <Typography variant="text14">{item.label}</Typography>
        </button>
      ))}
    </div>
  );
};
