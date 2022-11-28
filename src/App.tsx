import React from "react";
import "./App.css";
import { LandingScreen } from "./Components/LandingScreen";
import { GameScreen } from "./Components/GameScreen";
import { ResultScreen } from "./Components/ResultScreen";
import { Footer } from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { StyledContainer } from "./Components/Styles/App.styles";

function App() {
  return (
    <StyledContainer>
      <Routes>
        <Route path="/" element={<LandingScreen />}/>
        <Route path="/game" element={<GameScreen />}/>
        <Route path="/result" element={<ResultScreen />}/>
      </Routes>
      <Footer />
    </StyledContainer>
  );
}

export default App;
