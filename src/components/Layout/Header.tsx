import React from "react";
import SiteLogo from "../Header/SiteLogo";
import TopMenu from "../Navigation/TopMenu";

const Header = () => {
  return (
    <header className="flex flex-row bg-orange-500 p-10">
      <SiteLogo />
      <TopMenu className="ml-auto" />
    </header>
  );
};

export default Header;
