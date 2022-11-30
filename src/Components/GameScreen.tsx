import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenWrapper } from "./Styles/GameScreen.styles";
import { Button } from "@mui/material";
import { Context } from "./../ContextProvider";
import { WordSet, animals, colors, vehicles } from "../data";

export const GameScreen = () => {
  const { setPoints } = useContext(Context);
  const [chosenSet, setChosenSet] = useState<WordSet>({
    question: "",
    all_words: [],
    good_words: [],
  });
  const [gameover, setGameover] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
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

  const handleWordClick = (element: string) => {
    setSelectedWords([...selectedWords, element]);
    console.log(selectedWords);
  };

  // RANDOMISER:

  const chooseSet = () => {
    const choice = Math.ceil(Math.random() * 3);
    switch (choice) {
      case 1:
        setChosenSet(animals);
        break;
      case 2:
        setChosenSet(colors);
        break;
      case 3:
        setChosenSet(vehicles);
        break;
      default:
        setChosenSet(animals);
        break;
    }
  };

  // COMPONENT:

  return (
    <>
      <h1>{chosenSet.question}:</h1>
      <ScreenWrapper>
        {chosenSet.all_words.map((element, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name={index.toString()}
              id={index.toString()}
              onChange={() => handleWordClick(element)}
            />
            <label htmlFor={index.toString()}>{element}</label>
          </div>
        ))}
      </ScreenWrapper>
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
