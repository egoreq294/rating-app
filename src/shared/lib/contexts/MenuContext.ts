import { createContext } from 'react';

import { TopLevelCategory } from '@shared/constants/topLevelCategory';
import { MenuContext as MenuContextProps } from '../../types/menuContext';

export const MenuContext = createContext<MenuContextProps>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});
