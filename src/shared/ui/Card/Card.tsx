import cn from 'classnames';
import { FC, ReactNode, Ref } from 'react';

import styles from './styles.module.scss';

export type CardVariant = 'Primary' | 'Secondary';

interface Props {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  ref?: Ref<HTMLDivElement>;
}

export const Card: FC<Props> = ({
  children,
  variant = 'Primary',
  className,
  ref,
}) => {
  return (
    <div className={cn(styles.Card, styles[variant], className)} ref={ref}>
      {children}
    </div>
  );
};
