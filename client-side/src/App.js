import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>{/* <Route path="/" element={<Home />} /> */}</Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
