'use client';

import React, { FC } from 'react';

import { useMenu } from '@shared/lib/hooks';

export const Menu: FC = () => {
  const { menu } = useMenu();

  return (
    <div>
      {menu.map((item) => (
        <span key={item._id.secondCategory}>{item._id.secondCategory}</span>
      ))}
    </div>
  );
};
