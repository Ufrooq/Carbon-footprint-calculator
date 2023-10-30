import React from "react";
import { Outlet } from "react-router-dom";

const Bus = () => {
  return (
    <div>
      Bus
      <Outlet />
    </div>
  );
};

export default Bus;
