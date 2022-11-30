import { LandingScreen } from "./Components/LandingScreen";
import { GameScreen } from "./Components/GameScreen";
import { ResultScreen } from "./Components/ResultScreen";
import { Footer } from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import { ScreenWrapper, MainSection } from "./Components/Styles/App.styles";

function App() {
  return (
    <ScreenWrapper>
      <MainSection>
        <Routes>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/game" element={<GameScreen />} />
          <Route path="/result" element={<ResultScreen />} />
        </Routes>
      </MainSection>
      <Footer />
    </ScreenWrapper>
  );
}

export default App;
