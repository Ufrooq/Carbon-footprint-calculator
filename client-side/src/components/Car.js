import React from "react";
import { Outlet } from "react-router-dom";

const Car = () => {
  return (
    <div>
      Car
      <Outlet />
    </div>
  );
};

export default Car;
