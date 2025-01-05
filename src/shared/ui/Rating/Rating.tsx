'use client';

import cn from 'classnames';
import React, {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  KeyboardEvent,
  useState,
} from 'react';

import { Icon } from '../Icon';

import styles from './styles.module.css';

const stars = [1, 2, 3, 4, 5];

interface Props
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'onChange'
  > {
  disabled?: boolean;
  value: number;
  onChange: (value: number) => void;
}

export const Rating: FC<Props> = ({
  value,
  onChange,
  disabled,
  className,
  ...props
}) => {
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

    onChange(starCount);
    setCurrentStarCount(starCount);
  };

  const onSpaceClick =
    (starCount: number) =>
    (e: KeyboardEvent<SVGSVGElement>): void => {
      if (disabled || e.code !== 'Space') {
        return;
      }
      onChange(starCount);
      setCurrentStarCount(starCount);
    };

  return (
    <div className={cn(styles.Rating, className)} {...props}>
      {stars.map((item) => (
        <span
          onMouseLeave={onLeave}
          onMouseEnter={onHover(item)}
          key={item}
          onClick={onClick(item)}
          className={cn(styles.Icon, {
            [styles.Selected]: currentStarCount >= item,
            [styles.Disabled]: disabled,
          })}
        >
          <Icon
            width={20}
            height={20}
            name="Star"
            tabIndex={disabled ? -1 : 0}
            onKeyDown={onSpaceClick(item)}
          />
        </span>
      ))}
    </div>
  );
};
