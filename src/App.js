import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/Navbar/Navbar";
import View from "./components/View/View";

function App() {
  return (
    <>
      <Navbar />
      <LandingPage />
      <View />
    </>
  );
}

export default App;
