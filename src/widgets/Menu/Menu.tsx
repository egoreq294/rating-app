'use client';

import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, JSX } from 'react';

import { FirstLevelMenuItem, PageItem } from '@entities/Menu';
import { TopLevelCategory } from '@entities/Page';
import { useMenu } from '@shared/lib/hooks';
import { Icon, Typography } from '@shared/ui';

import styles from './styles.module.scss';

const firstLevelMenu: FirstLevelMenuItem[] = [
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

export const Menu: FC = () => {
  const pathname = usePathname();

  const { menu, setMenu, firstCategory } = useMenu();

  const openSecondLevel = (secondCategory: string): void => {
    if (!setMenu) {
      return;
    }

    setMenu(
      menu.map((item) => {
        if (item._id.secondCategory === secondCategory) {
          item.isOpened = !item.isOpened;
        }
        return item;
      }),
    );
  };

  const buildThirdLevelMenu = (
    pages: PageItem[],
    route: string,
  ): JSX.Element => {
    return (
      <>
        {pages.map((item) => (
          <Link
            href={`/${route}/${item.alias}`}
            className={cn(styles.ThirdLevelLink, {
              [styles.ThirdLevelLinkActive]:
                `/${route}/${item.alias}` === pathname,
            })}
            key={item.category}
          >
            <Typography variant="text16">{item.category}</Typography>
          </Link>
        ))}
      </>
    );
  };

  const buildSecondLevelMenu = (
    firstLevelMenu: FirstLevelMenuItem,
  ): JSX.Element => {
    return (
      <div>
        {menu.map((item) => {
          if (
            typeof pathname === 'string' &&
            item.pages
              .map((page) => page.alias)
              .includes(pathname.split('/')[2])
          ) {
            item.isOpened = true;
          }

          return (
            <div key={item._id.secondCategory} className={styles.SecondBlock}>
              <button
                className={styles.SecondCategoryButton}
                onClick={() => {
                  openSecondLevel(item._id.secondCategory);
                }}
              >
                <Typography variant="text14" className={styles.SecondLevelMenu}>
                  {item._id.secondCategory}
                </Typography>
              </button>

              <div
                className={cn(styles.SecondLevelBlock, {
                  [styles.SecondLevelBlockOpened]: item.isOpened,
                })}
              >
                {buildThirdLevelMenu(item.pages, firstLevelMenu.route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildFirstLevelMenu = (): JSX.Element => {
    return (
      <>
        {firstLevelMenu.map((item) => (
          <div key={item.route}>
            <Link href={`/${item.route}`}>
              <div
                className={cn(styles.FirstLevelMenu, {
                  [styles.FirstLevelMenuActive]: item.id === firstCategory,
                })}
              >
                <Icon name={item.icon} width={24} height={24} />
                <Typography variant="text18">{item.name}</Typography>
              </div>
            </Link>
            {item.id === firstCategory && buildSecondLevelMenu(item)}
          </div>
        ))}
      </>
    );
  };

  return <div className={styles.Menu}>{buildFirstLevelMenu()}</div>;
};
