import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LandingScreen } from "./Components/LandingScreen";
import { GameScreen } from "./Components/GameScreen";
import { ResultScreen } from "./Components/ResultScreen";
import { Footer } from "./Components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingScreen />}/>
        <Route path="/game" element={<GameScreen />}/>
        <Route path="/result" element={<ResultScreen />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
