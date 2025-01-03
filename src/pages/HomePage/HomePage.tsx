import { Typography } from "@shared/ui";
import React, { FC } from "react";

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
    </>
  );
};
