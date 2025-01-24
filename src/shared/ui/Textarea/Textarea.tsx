import cn from 'classnames';
import React, { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

import styles from './styles.module.scss';

export const Textarea: FC<
  DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  >
> = ({ className, ...props }) => {
  return <textarea className={cn(styles.Textarea, className)} {...props} />;
};
