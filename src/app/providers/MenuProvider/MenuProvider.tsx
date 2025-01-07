'use client';

import React, { FC, ReactNode, useState } from 'react';

import { MenuItem } from '@entities/Menu';
import { MenuContext } from '@shared/lib/contexts';
import { MenuContext as MenuContextProps } from '@shared/types/menuContext';

interface ConfigProviderProps extends Omit<MenuContextProps, 'setMenu'> {
  children: ReactNode;
}

export const MenuProvider: FC<ConfigProviderProps> = ({
  menu,
  firstCategory,
  children,
}) => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);

  return (
    <MenuContext.Provider
      value={{ menu: menuState, setMenu: setMenuState, firstCategory }}
    >
      {children}
    </MenuContext.Provider>
  );
};
