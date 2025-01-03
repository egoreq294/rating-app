import cn from 'classnames';
import React, { ElementType, FC, memo, ReactNode } from 'react';

import styles from './styles.module.css';

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'text14' | 'text16';

const CLASSNAME_VARIANT_MAP: Record<TypographyVariant, string> = {
  h1: 'H1',
  h2: 'H2',
  h3: 'H3',
  text14: 'Text14',
  text16: 'Text16',
};

const COMPONENT_VARIANT_MAP: Record<TypographyVariant, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  text14: 'p',
  text16: 'p',
};

interface Props {
  className?: string;
  children: ReactNode;
  variant: TypographyVariant;
  component?: ElementType;
}

export const Typography: FC<Props> = memo(
  ({ className, variant, children, component }) => {
    const Tag = component || COMPONENT_VARIANT_MAP[variant];

    return (
      <Tag className={cn(styles[CLASSNAME_VARIANT_MAP[variant]], className)}>
        {children}
      </Tag>
    );
  },
);
