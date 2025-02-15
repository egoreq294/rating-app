import { motion, Variants } from 'framer-motion';
import React, { FC } from 'react';

import { useScrollY } from '@shared/lib/hooks';
import { Icon, IconButton } from '@shared/ui';

interface Props {
  className?: string;
}

export const ScrollToTopButton: FC<Props> = ({ className }) => {
  const scrollY = useScrollY();

  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isVisible = scrollY > 300;

  const animationVariants: Variants = {
    visible: {
      opacity: 1,
      display: 'block',
    },
    hidden: { opacity: 0, display: 'none' },
  };

  return (
    <motion.div
      className={className}
      variants={animationVariants}
      initial={'hidden'}
      animate={isVisible ? 'visible' : 'hidden'}
    >
      <IconButton variant="Primary" onClick={scrollToTop}>
        <Icon name="ChevronUp" width={24} height={24} />
      </IconButton>
    </motion.div>
  );
};
