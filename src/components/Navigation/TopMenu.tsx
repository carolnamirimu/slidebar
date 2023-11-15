import React from "react";
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

interface TopMenuProps {
  className?: string;
}

const TopMenu = ({ className }: TopMenuProps) => {
  console.log("roboto", roboto);

  return (
    <ul className={`${className} ${roboto.className} flex flex-row gap-4`}>
      <li>Football</li>
      <li>Pool</li>
      <li>Events</li>
      <li>Drinks</li>
      <li>Food</li>
    </ul>
  );
};

export default TopMenu;
