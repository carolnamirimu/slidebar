import React from "react";
import SectionWrapper from "./SectionWrapper";
import Image from "next/image";

const PoolSection = () => {
  return (
    <SectionWrapper className="">
      <div className="flex-1 bg-purple-800 p-24">
        <Image
          className="w-full"
          src="/images/pool-table.jpg"
          alt="Football"
          width={800}
          height={100}
        />
      </div>
    </SectionWrapper>
  );
};

export default PoolSection;
