import React from "react";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Features from "./pages/Features";
import Resources from "./pages/Resources";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import "./styles/style.css";

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='features' element={<Features />} />
        <Route path='resources' element={<Resources />} />
        <Route path='pricing' element={<Pricing />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
