import cn from 'classnames';
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from 'react';

import styles from './styles.module.scss';

type ButtonVariant = 'Primary' | 'Secondary';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant: ButtonVariant;
}

export const IconButton: FC<Props> = ({
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(styles.IconButton, styles[variant], className)}
    >
      {children}
    </button>
  );
};
