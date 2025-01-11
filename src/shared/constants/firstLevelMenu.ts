import { TopLevelCategory } from '@entities/Page';

export const FIRST_LEVEL_MENU: Array<{
  route: string;
  category: TopLevelCategory;
}> = [
  { route: 'courses', category: TopLevelCategory.Courses },
  { route: 'services', category: TopLevelCategory.Services },
  { route: 'books', category: TopLevelCategory.Books },
  { route: 'products', category: TopLevelCategory.Products },
];
