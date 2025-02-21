'use client';

import cn from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';

import Logo from '@shared/assets/Logo.svg';
import { Search } from '@shared/ui/Search';
import { Menu } from '@widgets/Menu/Menu';

import styles from './styles.module.scss';

interface Props {
  className?: string;
  setIsBurgerClose?: Dispatch<SetStateAction<boolean>>;
  isMobile?: boolean;
}

export const Sidebar: FC<Props> = ({
  className,
  isMobile,
  setIsBurgerClose,
}) => {
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
      {!isMobile && <Image priority src={Logo} alt="Logo" />}
      <Search
        value={search}
        onChange={setSearch}
        onSubmit={onSubmit}
        className={styles.Search}
      />
      <Menu isMobile={isMobile} setIsBurgerClose={setIsBurgerClose} />
    </div>
  );
};
