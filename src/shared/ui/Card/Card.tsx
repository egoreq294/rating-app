import cn from 'classnames';
import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

export type CardVariant = 'Primary' | 'Secondary';

interface Props {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
}

export const Card: FC<Props> = ({
  children,
  variant = 'Primary',
  className,
}) => {
  return (
    <div className={cn(styles.Card, styles[variant], className)}>
      {children}
    </div>
  );
};
