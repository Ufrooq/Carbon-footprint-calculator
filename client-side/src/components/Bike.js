import React from "react";
import { Outlet } from "react-router-dom";

const Bike = () => {
  return (
    <div>
      Bike
      <Outlet />
    </div>
  );
};

export default Bike;
