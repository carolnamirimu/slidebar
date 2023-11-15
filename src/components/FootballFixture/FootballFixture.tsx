"use client";
import { Typography } from "@material-tailwind/react";

import React from "react";

interface FootballFixtureProps {
  className?: string;
}

const FootballFixture = ({ className }: FootballFixtureProps) => {
  return (
    <div className={`${className}`}>
      <Typography variant="h4">Saturday 14 - 13:00</Typography>
      <Typography variant="h4">Champions League</Typography>
      <div>Liverpool vs Manchester United</div>
    </div>
  );
};

export default FootballFixture;
