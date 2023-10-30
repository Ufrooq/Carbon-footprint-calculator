import React from "react";
import { Outlet } from "react-router-dom";

const House = () => {
  return (
    <div>
      House
      <Outlet />
    </div>
  );
};

export default House;
