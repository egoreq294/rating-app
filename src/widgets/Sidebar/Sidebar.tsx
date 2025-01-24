'use client';

import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { FC, useState } from 'react';

import Logo from '@shared/assets/Logo.svg';
import { Search } from '@shared/ui/Search';
import { Menu } from '@widgets/Menu/Menu';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

export const Sidebar: FC<Props> = ({ className }) => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const onSubmit = (search: string): void => {
    if (!search) {
      return;
    }

    router.push(`/search?query=${search}`);
  };

  return (
    <div className={cn(styles.Sidebar, className)}>
      <Image priority src={Logo} alt="Logo" />
      <Search value={search} onChange={setSearch} onSubmit={onSubmit} />
      <Menu />
    </div>
  );
};
