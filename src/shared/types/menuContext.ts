import { MenuItem } from '@entities/Menu';
import { TopLevelCategory } from '@entities/Page';

export interface MenuContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (menu: MenuItem[]) => void;
}
