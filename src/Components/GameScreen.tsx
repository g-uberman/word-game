import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenWrapper } from "./Styles/Shared.styles";
import { Button } from "@mui/material";
import { Context } from "./../ContextProvider";
import { WordSet, animals, colors, vehicles } from "../data";

export const GameScreen = () => {
  const { setPoints } = useContext(Context);
  const [ question, setQuestion ] = useState("");
  const [gameover, setGameover] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    chooseSet();
  }, []);

  // BUTTON EFFECTS:

  const handleCheck = () => {
    setGameover(true);
    setPoints(0);
  };

  const handleFinish = () => {
    navigate("/result");
  };

  // RANDOMISER:

  let chosenSet: WordSet = {
    question: "",
    all_words: [],
    good_words: []
  };

  const chooseSet = () => {
    const choice = Math.ceil(Math.random() * 3);
    switch (choice) {
      case 1:
        chosenSet = animals;
        break;
      case 2:
        chosenSet = colors;
        break;
      case 3:
        chosenSet = vehicles;
        break;
      default:
        chosenSet = animals;
        break;
    }
    setQuestion(chosenSet.question);
  };

  // COMPONENT

  return (
    <>
      <h1>{question}:</h1>
      <ScreenWrapper></ScreenWrapper>
      {!gameover && (
        <Button
          variant="contained"
          sx={{ margin: "24.65px" }}
          onClick={handleCheck}
        >
          Check answers
        </Button>
      )}
      {gameover && (
        <Button
          variant="contained"
          sx={{ margin: "24.65px" }}
          onClick={handleFinish}
        >
          Finish game
        </Button>
      )}
    </>
  );
};
