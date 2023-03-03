import "./App.css";

import Navigation from "./Components/Navigation";
import Header from "./Components/Header";
import RouteLinks from "./Components/RouteLinks";
import Footer from "./Components/Footer";
// import { useState } from "react";

function App() {

  return (
    <>
      <Header/>
      <Navigation/>
      <RouteLinks/>
      <Footer/>
    </>
  );
}

export default App;
