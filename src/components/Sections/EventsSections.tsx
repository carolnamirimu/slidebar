"use client";
import { Typography } from "@material-tailwind/react";
import React from "react";
import FootballFixture from "../FootballFixture/FootballFixture";

const EventsSections = () => {
  return (
    <div className=" bg-pink-700 p-10 text-white">
      <Typography variant="h2">Comming Events</Typography>
      <Typography variant="h3">November</Typography>
      <div className="flex flex-row flex-wrap gap-5">
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
        <FootballFixture className="basis-[calc(14.2857143%-1.25rem)]" />
      </div>
    </div>
  );
};

export default EventsSections;
