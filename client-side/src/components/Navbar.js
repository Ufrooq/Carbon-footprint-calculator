import React from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navbar
      <Outlet />
    </div>
  );
};

export default Navbar;
