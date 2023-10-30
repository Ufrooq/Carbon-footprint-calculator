import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import CalculatorPage from "./Pages/CalculatorPage";
import HomePage from "./Pages/HomePage";
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
          <Route path="/" element={<Welcome />} />
          <Route path="/" element={<Bike />} />
          <Route path="/" element={<Car />} />
          <Route path="/" element={<Bus />} />
          <Route path="/" element={<Flights />} />
          <Route path="/" element={<House />} />
          <Route path="/" element={<Secondary />} />
          <Route path="/" element={<Results />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
