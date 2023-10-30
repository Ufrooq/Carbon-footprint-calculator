import React from "react";
import { Outlet } from "react-router-dom";

const Flights = () => {
  return (
    <div>
      Flights
      <Outlet />
    </div>
  );
};

export default Flights;
