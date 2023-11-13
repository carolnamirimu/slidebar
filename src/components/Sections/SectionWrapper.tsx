import React from "react";

interface SectionWrapperProps {
  className?: string;
  children: React.ReactNode;
}
const SectionWrapper = ({ className, children }: SectionWrapperProps) => (
  <div
    className={`${className} mx-auto flex w-full max-w-screen-2xl justify-center gap-5 px-2.5`}
  >
    {children}
  </div>
);

export default SectionWrapper;
