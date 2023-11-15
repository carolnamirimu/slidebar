"use client";
import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const FootballSection = () => {
  return (
    <SectionWrapper>
      <div className="flex-1 bg-amber-400">
        <Image
          className="w-full"
          src="/images/soccer-ball-goal.jpg"
          alt="Football"
          width={800}
          height={100}
        />
      </div>
      <div className="text-slate-950 flex-1 py-5">
        <Typography
          variant="h2"
          className="mb-4 text-3xl md:text-4xl lg:text-5xl"
        >
          Football
        </Typography>
        <p>
          Just the basics - Everything you need to know about football at Slide
          Bar
        </p>
      </div>
    </SectionWrapper>
  );
};

export default FootballSection;
