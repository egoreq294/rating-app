import { useEffect, useState } from 'react';

export const useScrollY = (): number => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = (): void => {
    const currentScrollY = window?.scrollY || 0;
    setScrollY(currentScrollY);
  };

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll, { passive: true });

    return (): void => {
      window?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};
