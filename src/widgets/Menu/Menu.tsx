'use client';

import cn from 'classnames';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, JSX } from 'react';

import { FIRST_LEVEL_MENU } from '@shared/constants/firstLevelMenu';
import { useMenu } from '@shared/lib/hooks';
import { FirstLevelMenuItem, PageItem } from '@shared/types/menu';
import { Icon, Typography } from '@shared/ui';

import styles from './styles.module.scss';

export const Menu: FC = () => {
  const pathname = usePathname();

  const { menu, setMenu, firstCategory } = useMenu();

  const variants: Variants = {
    visible: {
      marginBottom: 'var(--gutter-m)',
    },
    hidden: { marginBottom: 0 },
  };

  const childrenVariants: Variants = {
    visible: {
      opacity: 1,
      height: 'auto',
    },
    hidden: { opacity: 0, height: 0 },
  };

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
          <motion.div key={item.category} variants={childrenVariants}>
            <Link
              href={`/${route}/${item.alias}`}
              className={cn(styles.ThirdLevelLink, {
                [styles.ThirdLevelLinkActive]:
                  `/${route}/${item.alias}` === pathname,
              })}
            >
              <Typography variant="text16">{item.category}</Typography>
            </Link>
          </motion.div>
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

              <motion.div
                layout
                variants={variants}
                initial={item.isOpened ? 'visible' : 'hidden'}
                animate={item.isOpened ? 'visible' : 'hidden'}
                className={styles.SecondLevelBlock}
              >
                {buildThirdLevelMenu(item.pages, firstLevelMenu.route)}
              </motion.div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildFirstLevelMenu = (): JSX.Element => {
    return (
      <>
        {FIRST_LEVEL_MENU.map((item) => (
          <div key={item.id}>
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
