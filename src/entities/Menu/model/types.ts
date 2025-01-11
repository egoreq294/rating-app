import { TopLevelCategory } from '@entities/Page';
import { IconName } from '@shared/ui/Icon/types';

export interface PageItem {
  alias: string;
  title: string;
  _id: string;
  category: string;
}

export interface MenuItem {
  _id: {
    secondCategory: string;
  };
  isOpened?: boolean;
  pages: PageItem[];
}

export interface FirstLevelMenuItem {
  route: string;
  name: string;
  icon: IconName;
  id: TopLevelCategory;
}
