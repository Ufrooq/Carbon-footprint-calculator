import React from "react";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      Footer
      <Outlet />
    </div>
  );
};

export default Footer;
