import { useContext } from "react";
import { LandingScreen } from "./Components/LandingScreen";
import { GameScreen } from "./Components/GameScreen";
import { ResultScreen } from "./Components/ResultScreen";
import { Footer } from "./Components/Footer";
import { ScreenWrapper, MainSection, WhiteWrapper } from "./Components/Styles/App.styles";
import { Context } from "./ContextProvider";

function App() {
  const { view } = useContext(Context);

  return (
    <ScreenWrapper>
      <MainSection>
        <WhiteWrapper>
        {view === "landing" && <LandingScreen />}
        {view === "game" && <GameScreen />}
        {view === "result" && <ResultScreen />}
        </WhiteWrapper>
      </MainSection>
      <Footer />
    </ScreenWrapper>
  );
}

export default App;
