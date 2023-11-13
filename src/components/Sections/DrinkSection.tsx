import React from "react";
import H2 from "../Ui/H2";
import SectionWrapper from "./SectionWrapper";

const DrinkSection = () => {
  return (
    <SectionWrapper>
      <div className="flex-1 bg-red-700">IMAGE</div>
      <div className="flex-1 py-5 text-slate-950">
        <H2>Drinks at Slide Bar</H2>
        <p>
          Just the basics - Everything you need to know about DRINKS at Slide
          Bar
        </p>
      </div>
    </SectionWrapper>
  );
};

export default DrinkSection;
