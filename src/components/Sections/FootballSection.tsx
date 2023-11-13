import React from "react";
import H2 from "../Ui/H2";
import SectionWrapper from "./SectionWrapper";

const FootballSection = () => {
  return (
    <SectionWrapper>
      <div className="flex-1 bg-amber-400">IMAGE</div>
      <div className="flex-1 py-5 text-slate-950">
        <H2>Football</H2>
        <p>
          Just the basics - Everything you need to know about football at Slide
          Bar
        </p>
      </div>
    </SectionWrapper>
  );
};

export default FootballSection;
