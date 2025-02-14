import cn from 'classnames';
import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from 'react';

import styles from './styles.module.scss';

type ButtonVariant = 'Primary' | 'Secondary' | 'Ghost';
type ButtonSize = 'S' | 'M';

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  variant: ButtonVariant;
  size?: ButtonSize;
}

export const IconButton: FC<Props> = ({
  children,
  variant,
  className,
  size = 'M',
  type = 'button',
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        styles.IconButton,
        styles[variant],
        styles[size],
        className,
      )}
      type={type}
    >
      {children}
    </button>
  );
};
