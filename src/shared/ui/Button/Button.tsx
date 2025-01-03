import cn from 'classnames';
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from 'react';

import styles from './styles.module.css';

type ButtonVariant = 'Primary' | 'Secondary';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant: ButtonVariant;
  fullWidth?: boolean;
}

export const Button: FC<Props> = ({
  children,
  variant,
  fullWidth,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        styles.Button,
        styles[variant],
        {
          [styles.FullWidth]: fullWidth,
        },
        className,
      )}
    >
      {children}
    </button>
  );
};
