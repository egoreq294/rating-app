'use client';

import React, { FC, useState } from 'react';

import { Button, Rating, Typography } from '@shared/ui';
import { Textarea } from '@shared/ui/Textarea';

export const HomePage: FC = () => {
  const [rating, setRating] = useState(3);

  return (
    <>
      <Typography variant="h1">First Header</Typography>
      <Typography variant="h2">Second Header</Typography>
      <Typography variant="h3">Third Header</Typography>
      <Typography variant="text16">Text 16</Typography>
      <Typography variant="text14">Text 14</Typography>
      <Rating value={rating} onChange={setRating} />
      <Textarea placeholder="text" />
      <Button variant="Primary">tets</Button>
      <Button variant="Secondary">tets</Button>
    </>
  );
};
