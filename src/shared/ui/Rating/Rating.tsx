'use client';

import cn from 'classnames';
import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  KeyboardEvent,
  useRef,
  useState,
} from 'react';

import { Icon } from '../Icon';

import styles from './styles.module.scss';

const cumputeFocus = (
  rating: number,
  item: number,
  disabled: boolean,
  initialTabIndex: number | undefined,
): number => {
  if (disabled) {
    return -1;
  }

  if (!rating && item === 1) {
    return initialTabIndex ?? 0;
  }

  if (rating === item) {
    return initialTabIndex ?? 0;
  }

  return -1;
};

const stars = [1, 2, 3, 4, 5];

interface Props
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'onChange'
  > {
  disabled?: boolean;
  value: number;
  onChange?: (value: number) => void;
}

export const Rating: FC<Props> = ({
  value,
  onChange,
  disabled,
  className,
  tabIndex,
  ...props
}) => {
  const ratingArrayRef = useRef<Array<HTMLSpanElement | null>>([]);
  const [currentStarCount, setCurrentStarCount] = useState(value);

  const onHover = (starCount: number) => (): void => {
    if (disabled) {
      return;
    }

    setCurrentStarCount(starCount);
  };

  const onLeave = (): void => {
    if (disabled) {
      return;
    }
    setCurrentStarCount(value);
  };

  const onClick = (starCount: number) => (): void => {
    if (disabled) {
      return;
    }

    onChange?.(starCount);
    setCurrentStarCount(starCount);
  };

  const handleKey = (e: KeyboardEvent<HTMLDivElement>): void => {
    if (disabled || !onChange) {
      return;
    }

    if (e.code === 'ArrowRight' || e.code === 'ArrowUp') {
      e.preventDefault();
      const updatedRating = currentStarCount < 5 ? currentStarCount + 1 : 5;
      setCurrentStarCount(updatedRating);
      onChange(updatedRating);
      ratingArrayRef.current?.[currentStarCount]?.focus();
    }

    if (e.code === 'ArrowLeft' || e.code === 'ArrowDown') {
      e.preventDefault();
      const updatedRating = currentStarCount > 0 ? currentStarCount - 1 : 0;
      setCurrentStarCount(updatedRating);
      onChange(updatedRating);
      ratingArrayRef.current?.[currentStarCount - 2]?.focus();
    }
  };

  return (
    <div
      className={cn(styles.Rating, className)}
      role={disabled ? '' : 'slider'}
      aria-valuenow={currentStarCount}
      aria-valuemin={0}
      aria-valuemax={5}
      aria-label={
        disabled
          ? `Рейтинг ${currentStarCount}`
          : 'Укажите рейтинг стрелками вверх или вниз'
      }
      {...props}
    >
      {stars.map((item, index) => (
        <span
          ref={(r) => {
            ratingArrayRef.current[index] = r;
          }}
          onMouseLeave={onLeave}
          onMouseEnter={onHover(item)}
          key={item}
          onClick={onClick(item)}
          tabIndex={cumputeFocus(currentStarCount, item, !!disabled, tabIndex)}
          onKeyDown={handleKey}
          className={cn(styles.Icon, {
            [styles.Selected]: currentStarCount >= item,
            [styles.Disabled]: disabled,
          })}
        >
          <Icon width={20} height={20} name="Star" />
        </span>
      ))}
    </div>
  );
};
