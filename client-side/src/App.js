import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import CalculatorPage from "./Pages/CalculatorPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<CalculatorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
