import cn from 'classnames';
import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

import styles from './styles.module.scss';

export const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ className, ...props }) => {
  return <input className={cn(styles.Input, className)} {...props} />;
};
