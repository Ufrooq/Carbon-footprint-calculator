import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => navigate("/calculator")}>
        Calculate your CARBIN foot print
      </button>
    </div>
  );
};

export default HomePage;
