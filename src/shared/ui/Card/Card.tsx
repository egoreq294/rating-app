import cn from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';

import styles from './styles.module.scss';

export type CardVariant = 'Primary' | 'Secondary';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface Props extends DivProps {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
}

export const Card: FC<Props> = ({
  children,
  variant = 'Primary',
  className,
  ...props
}) => {
  return (
    <div className={cn(styles.Card, styles[variant], className)} {...props}>
      {children}
    </div>
  );
};
