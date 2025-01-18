import cn from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';

import Logo from '@shared/assets/Logo.svg';
import { Menu } from '@widgets/Menu/Menu';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

export const Sidebar: FC<Props> = ({ className }) => {
  return (
    <div className={cn(styles.Sidebar, className)}>
      <Image priority src={Logo} alt="Logo" />
      <div>Search</div>
      <Menu />
    </div>
  );
};
