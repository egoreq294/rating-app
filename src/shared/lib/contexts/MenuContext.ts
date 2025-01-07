import { createContext } from 'react';

import { TopLevelCategory } from '@entities/Page';
import { MenuContext as MenuContextProps } from '../../types/menuContext';

export const MenuContext = createContext<MenuContextProps>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});
