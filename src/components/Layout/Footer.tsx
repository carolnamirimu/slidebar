import React from "react";
import Contact from "../Footer/Contact";
import Date from "../Footer/Date";

const Footer = () => {
  return (
    <footer className="flex flex-row bg-slate-900 p-10 text-white">
      <Contact />
      <Date />
    </footer>
  );
};

export default Footer;
