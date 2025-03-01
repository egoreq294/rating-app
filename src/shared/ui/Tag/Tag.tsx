import cn from 'classnames';
import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

type TagVariant = 'Primary' | 'Secondary' | 'Success' | 'Error' | 'Info';
type TagSize = 's' | 'm';

type SpanProps = DetailedHTMLProps<
  HTMLAttributes<HTMLSpanElement>,
  HTMLDivElement
>;

interface Props extends SpanProps {
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
  ...restProps
}) => {
  if (href) {
    return (
      <span
        className={cn(
          styles.Tag,
          styles.Link,
          styles[TAG_SIZE_MAP[size]],
          styles[variant],
          { [styles.Bold]: bold },
          className,
        )}
        {...restProps}
      >
        <a href={href} rel="noopener noreferrer" target="_blank">
          {children}
        </a>
      </span>
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
      {...restProps}
    >
      {children}
    </span>
  );
};
