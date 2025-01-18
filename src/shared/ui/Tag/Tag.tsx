import cn from 'classnames';
import React, { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

type TagVariant = 'Primary' | 'Secondary' | 'Success' | 'Error' | 'Info';
type TagSize = 's' | 'm';

interface Props {
  variant: TagVariant;
  size?: TagSize;
  href?: string;
  bold?: boolean;
  className?: string;
  children: ReactNode;
}

const TAG_SIZE_MAP: Record<TagSize, string> = {
  s: 'S',
  m: 'M',
};

export const Tag: FC<Props> = ({
  children,
  className,
  variant,
  bold,
  href,
  size = 's',
}) => {
  if (href) {
    return (
      <a
        className={cn(
          styles.Tag,
          styles.Link,
          styles[TAG_SIZE_MAP[size]],
          styles[variant],
          { [styles.Bold]: bold },
          className,
        )}
        href={href}
        rel="noopener noreferrer"
        target="_blank"
      >
        {children}
      </a>
    );
  }

  return (
    <span
      className={cn(
        styles.Tag,
        styles[TAG_SIZE_MAP[size]],
        styles[variant],
        { [styles.Bold]: bold },
        className,
      )}
    >
      {children}
    </span>
  );
};
