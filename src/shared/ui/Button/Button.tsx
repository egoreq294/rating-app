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
  fullWidth?: boolean;
}

export const Button: FC<Props> = ({
  children,
  variant,
  fullWidth,
  className,
  type = 'button',
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
      type={type}
    >
      {children}
    </button>
  );
};
