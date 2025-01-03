import React, { FC } from 'react';

import { Button, Icon, Typography } from '@shared/ui';

export const HomePage: FC = () => {
  return (
    <>
      <Typography variant="h1">First Header</Typography>
      <Typography variant="h2">Second Header</Typography>
      <Typography variant="h3">Third Header</Typography>
      <Typography variant="text16">Text 16</Typography>
      <Typography variant="text14">Text 14</Typography>
      <Typography variant="text14" component="span">
        Text 14 span
      </Typography>

      <Button variant="Primary">
        Button <Icon name="ChevronRight" width={16} height={16} />
      </Button>
      <Button variant="Secondary">
        Button <Icon name="ChevronRight" width={16} height={16} />
      </Button>
      <Button variant="Primary" disabled>
        Button
      </Button>
      <Button variant="Secondary" disabled>
        Button
      </Button>
      <Button variant="Primary" fullWidth>
        Button
      </Button>
      <Button variant="Secondary" fullWidth>
        Button
      </Button>
    </>
  );
};
