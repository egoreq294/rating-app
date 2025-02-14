import cn from 'classnames';
import React, { ElementType, FC, memo, ReactNode } from 'react';

import styles from './styles.module.scss';

type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'text14'
  | 'text16'
  | 'text18'
  | 'caption20'
  | 'textBold14'
  | 'textBold16'
  | 'textBold20'
  | 'textBold26'
  | 'textBold36';

interface Props {
  className?: string;
  children: ReactNode;
  variant: TypographyVariant;
  component?: ElementType;
}

const CLASSNAME_VARIANT_MAP: Record<TypographyVariant, string> = {
  h1: 'H1',
  h2: 'H2',
  h3: 'H3',
  text14: 'Text14',
  text16: 'Text16',
  text18: 'Text18',
  caption20: 'Caption20',
  textBold14: 'TextBold14',
  textBold16: 'TextBold16',
  textBold20: 'TextBold20',
  textBold26: 'TextBold26',
  textBold36: 'TextBold36',
};

const COMPONENT_VARIANT_MAP: Record<TypographyVariant, string> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  text14: 'p',
  text16: 'p',
  text18: 'p',
  caption20: 'p',
  textBold14: 'p',
  textBold16: 'p',
  textBold20: 'p',
  textBold26: 'p',
  textBold36: 'p',
};

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
