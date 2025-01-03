import React, { FC } from 'react';

import { Button, Icon, Tag, Typography } from '@shared/ui';

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
      <Tag variant="Primary" size="s">
        tag
      </Tag>
      <Tag variant="Primary" size="s" bold>
        tag
      </Tag>
      <Tag variant="Primary" size="m">
        tag
      </Tag>
      <Tag variant="Primary" size="m" bold>
        tag
      </Tag>
      <Tag variant="Primary" size="m" bold href="http://vk.com/feed">
        tag
      </Tag>
      <Tag variant="Secondary" size="s">
        tag
      </Tag>
      <Tag variant="Secondary" size="s" bold>
        tag
      </Tag>
      <Tag variant="Secondary" size="m">
        tag
      </Tag>
      <Tag variant="Secondary" size="m" bold>
        tag
      </Tag>
      <Tag variant="Secondary" size="m" bold href="http://vk.com/feed">
        tag
      </Tag>
      <Tag variant="Success" size="s">
        tag
      </Tag>
      <Tag variant="Success" size="s" bold>
        tag
      </Tag>
      <Tag variant="Success" size="m">
        tag
      </Tag>
      <Tag variant="Success" size="m" bold>
        tag
      </Tag>
      <Tag variant="Success" size="m" bold href="http://vk.com/feed">
        tag
      </Tag>
      <Tag variant="Error" size="s">
        tag
      </Tag>
      <Tag variant="Error" size="s" bold>
        tag
      </Tag>
      <Tag variant="Error" size="m">
        tag
      </Tag>
      <Tag variant="Error" size="m" bold>
        tag
      </Tag>
      <Tag variant="Info" size="s">
        tag
      </Tag>
      <Tag variant="Info" size="s" bold>
        tag
      </Tag>
      <Tag variant="Info" size="m">
        tag
      </Tag>
      <Tag variant="Info" size="m" bold>
        tag
      </Tag>
    </>
  );
};
