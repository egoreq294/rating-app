import { FirstLevelMenuItem } from '@entities/Menu';
import { TopLevelCategory } from '@entities/Page';

export const FIRST_LEVEL_MENU: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: 'Courses',
    id: TopLevelCategory.Courses,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: 'Services',
    id: TopLevelCategory.Services,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: 'Book',
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Продукты',
    icon: 'Product',
    id: TopLevelCategory.Products,
  },
];
