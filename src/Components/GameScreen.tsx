import { useContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenWrapper } from "./Styles/GameScreen.styles";
import { ClearWrapper } from "./Styles/Shared.styles";
import { Button } from "@mui/material";
import { Context } from "./../ContextProvider";
import { WordSet, animals, colors, vehicles } from "../data";

export const GameScreen = () => {
  // const wordRef = useRef(null);

  const { points, setPoints } = useContext(Context);
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

  // CHECK RESULT

  const checkResult = () => {
    let currentSum = 0;
    // check selected for correct & incorrect
    selectedWords.forEach((word) => {
      if (chosenSet.good_words.includes(word)) {
        currentSum += 2;
        markCorrect(word);
      } else {
        currentSum -= 1;
        markIncorrect(word);
      }
    });
    // check correct for unselected
    chosenSet.good_words.forEach((word) => {
      if (!selectedWords.includes(word)) {
        currentSum -= 1;
        markIncorrect(word);
      }
    });
    setPoints(currentSum);
  };

  const markCorrect = (word: string) => {
    let i = chosenSet.all_words.indexOf(word);
    document.getElementById(`label${i}`)?.classList.add("correct");
  };

  const markIncorrect = (word: string) => {
    let i = chosenSet.all_words.indexOf(word);
    document.getElementById(`label${i}`)?.classList.add("incorrect");
  };

  // BUTTON EFFECTS:

  const handleCheck = () => {
    checkResult();
    setGameover(true);
  };

  const handleFinish = () => {
    navigate("/result");
  };

  const handleWordClick = (element: string) => {
    if (gameover) {
      return null;
    }
    // add item
    if (!selectedWords.includes(element)) {
      setSelectedWords([...selectedWords, element]);
    } else {
      //remove item
      setSelectedWords(selectedWords.filter((item) => item !== element));
    }
  };

  // RANDOMISER:

  const chooseSet = () => {

    function shuffle(set: WordSet) {
      let currentIndex = set.all_words.length,  randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [set.all_words[currentIndex], set.all_words[randomIndex]] = [
          set.all_words[randomIndex], set.all_words[currentIndex]];
      }
      return set;
    }

    const choice = Math.ceil(Math.random() * 3);
    switch (choice) {
      case 1:
        setChosenSet(shuffle(animals));
        break;
      case 2:
        setChosenSet(shuffle(colors));
        break;
      case 3:
        setChosenSet(shuffle(vehicles));
        break;
      default:
        setChosenSet(shuffle(animals));
        break;
    }
  };

  // COMPONENT:

  return (
    <ClearWrapper>
      <h1>{chosenSet.question}:</h1>
      <ScreenWrapper>
        {chosenSet.all_words.map((element, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name={index.toString()}
              id={index.toString()}
              onChange={() => handleWordClick(element)}
              disabled={gameover}
            />
            <label htmlFor={index.toString()} id={"label" + index.toString()}>
              {element}
            </label>
          </div>
        ))}
      </ScreenWrapper>
      {!gameover && (
        <Button
          variant="contained"
          sx={{ margin: "24.65px" }}
          onClick={handleCheck}
          size="large"
        >
          Check answers
        </Button>
      )}
      {gameover && (
        <Button
          variant="contained"
          sx={{ margin: "24.65px" }}
          onClick={handleFinish}
          size="large"
          color="warning"
        >
          Finish game
        </Button>
      )}
    </ClearWrapper>
  );
};
