import cn from 'classnames';
import React, { FC, ReactNode } from 'react';

import styles from './styles.module.css';

interface Props {
  className?: string;
  header?: ReactNode;
  content?: ReactNode;
  sidebar?: ReactNode;
  footer?: ReactNode;
}

export const MainLayout: FC<Props> = ({
  className,
  header,
  content,
  sidebar,
  footer,
}) => {
  return (
    <div className={cn(styles.MainLayout, className)}>
      <div className={styles.Header}>{header}</div>
      <div className={styles.Sidebar}>{sidebar}</div>
      <div className={styles.Content}>{content}</div>
      <div className={styles.Footer}>{footer}</div>
    </div>
  );
};
