"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";
import SectionWrapper from "./SectionWrapper";

const FoodSection = () => {
  return (
    <SectionWrapper>
      <div className="flex-1 bg-red-700">
        <Image
          className="w-full"
          src="/images/mpuuta.jpg"
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
          Food at Slide Bar
        </Typography>

        <p>
          Just the basics - Everything you need to know about Food at Slide Bar
        </p>
      </div>
    </SectionWrapper>
  );
};

export default FoodSection;
