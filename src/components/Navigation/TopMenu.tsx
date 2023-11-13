import React from "react";

interface TopMenuProps {
  className?: string;
}

const TopMenu = ({ className }: TopMenuProps) => {
  return (
    <ul className={`${className} flex flex-row gap-4`}>
      <li>Football</li>
      <li>Pool</li>
      <li>Events</li>
      <li>Drinks</li>
      <li>Food</li>
    </ul>
  );
};

export default TopMenu;
