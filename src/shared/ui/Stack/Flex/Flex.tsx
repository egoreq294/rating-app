import cn from 'classnames';
import React, { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

export type FlexJusify = 'start' | 'center' | 'end' | 'spaceBetween';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDiraction = 'column' | 'row';
export type FlexGap = '4' | '8' | '12' | '16' | '20' | '24' | '28' | '32';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJusify;
  align?: FlexAlign;
  gap?: FlexGap;
  direction?: FlexDiraction;
  fullWidth?: boolean;
}

const JUSTIFY_MAP: Record<FlexJusify, string> = {
  start: styles.JustifyStart,
  center: styles.JustifyCenter,
  end: styles.JustifyEnd,
  spaceBetween: styles.JustifySpaceBetween,
};

const ALIGN_MAP: Record<FlexAlign, string> = {
  start: styles.AlignStart,
  end: styles.AlignEnd,
  center: styles.AlignCenter,
};

const DIRECTION_MAP: Record<FlexDiraction, string> = {
  row: styles.DirectionRow,
  column: styles.DirectionColumn,
};

const GAP_MAP: Record<FlexGap, string> = {
  4: styles.Gap4,
  8: styles.Gap8,
  12: styles.Gap12,
  16: styles.Gap16,
  20: styles.Gap20,
  24: styles.Gap24,
  28: styles.Gap28,
  32: styles.Gap32,
};

export const Flex: FC<FlexProps> = ({
  className,
  children,
  justify = 'start',
  align = 'center',
  direction = 'row',
  fullWidth,
  gap,
  ...props
}) => {
  return (
    <div
      className={cn(
        styles.Flex,
        JUSTIFY_MAP[justify],
        ALIGN_MAP[align],
        DIRECTION_MAP[direction],
        gap && GAP_MAP[gap],
        { [styles.FullWidth]: fullWidth },
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
