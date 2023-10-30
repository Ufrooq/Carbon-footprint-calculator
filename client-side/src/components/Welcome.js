import React from "react";
import { Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      Welcome
      <Outlet />
    </div>
  );
};

export default Welcome;
