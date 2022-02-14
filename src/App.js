import React from "react";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import "./styles/style.css";

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Homepage />
      <Footer />
    </div>
  );
};

export default App;
