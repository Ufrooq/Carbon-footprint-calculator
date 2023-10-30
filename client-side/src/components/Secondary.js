import React from "react";
import { Outlet } from "react-router-dom";

const Secondary = () => {
  return (
    <div>
      Secondary
      <Outlet />
    </div>
  );
};

export default Secondary;
