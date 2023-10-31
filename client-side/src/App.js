import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import CalculatorPage from "./Pages/CalculatorPage.js";
import HomePage from "./Pages/HomePage.js";
import Welcome from "./components/Welcome.js";
import Car from "./components/Car.js";
import Bike from "./components/Bike.js";
import Flights from "./components/Flights.js";
import House from "./components/House.js";
import Bus from "./components/Bus.js";
import Secondary from "./components/Secondary.js";
import Results from "./components/Results.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />}>
          <Route index element={<Welcome />} />
          <Route path="bike" element={<Bike />} />
          <Route path="car" element={<Car />} />
          <Route path="bus" element={<Bus />} />
          <Route path="flights" element={<Flights />} />
          <Route path="house" element={<House />} />
          <Route path="secondary" element={<Secondary />} />
          <Route path="results" element={<Results />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
