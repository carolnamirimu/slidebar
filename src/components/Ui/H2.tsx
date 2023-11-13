import React from "react";

interface H2Props {
  className?: string;
  children: React.ReactNode;
}
const H2 = ({ className, children }: H2Props) => {
  return <h2 className={`${className} text-2xl`}>{children}</h2>;
};

export default H2;
