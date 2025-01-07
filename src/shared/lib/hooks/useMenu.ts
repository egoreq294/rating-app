import { useContext } from 'react';

import { MenuContext as MenuContextProps } from '@shared/types/menuContext';
import { MenuContext } from '../contexts';

export const useMenu = (): MenuContextProps =>
  useContext<MenuContextProps>(MenuContext);
