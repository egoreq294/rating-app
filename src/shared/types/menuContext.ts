import { TopLevelCategory } from '@shared/constants/topLevelCategory';
import { MenuItem } from './menu';

export interface MenuContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (menu: MenuItem[]) => void;
}
