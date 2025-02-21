import cn from 'classnames';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import React, { FC, useState } from 'react';

import Logo from '@shared/assets/Logo.svg';
import { Icon, IconButton } from '@shared/ui';
import { Sidebar } from '@widgets/Sidebar';

import styles from './styles.module.scss';

interface Props {
  className?: string;
}

export const Header: FC<Props> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const animationVariants: Variants = {
    opened: {
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      x: '-100%',
    },
  };

  return (
    <header className={cn(styles.Header, className)}>
      <Image priority src={Logo} alt="Logo" />
      <IconButton
        variant="Secondary"
        className={styles.IconButton}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <Icon name={isOpen ? 'Close' : 'Menu'} width={24} height={24} />
      </IconButton>
      <motion.div
        className={styles.MobileMenu}
        variants={animationVariants}
        initial="closed"
        animate={isOpen ? 'opened' : 'closed'}
      >
        <Sidebar isMobile setIsBurgerClose={setIsOpen} />
      </motion.div>
    </header>
  );
};
