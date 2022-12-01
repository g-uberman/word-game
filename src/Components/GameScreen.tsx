import { useContext, useState, useEffect } from "react";
import { GameField } from "./Styles/GameScreen.styles";
import { Button } from "@mui/material";
import { Context } from "./../ContextProvider";
import { WordSet, animals, colors, vehicles } from "../data";

export const GameScreen = () => {
  const { setPoints, setView } = useContext(Context);
  const [chosenSet, setChosenSet] = useState<WordSet>({
    question: "",
    all_words: [],
    good_words: [],
  });
  const [gameover, setGameover] = useState(false);
  const [selectedWords, setSelectedWords] = useState<string[]>([]);

  useEffect(() => {
    chooseSet();
  }, []);

  // CHECK RESULT

  const checkResult = () => {
    let currentSum = 0;
    // check selected for correct & incorrect answers
    selectedWords.forEach((word) => {
      if (chosenSet.good_words.includes(word)) {
        currentSum += 2;
        markCorrect(word);
      } else {
        currentSum -= 1;
        markIncorrect(word);
      }
    });
    // check for correct answers that were not selected
    chosenSet.good_words.forEach((word) => {
      if (!selectedWords.includes(word)) {
        currentSum -= 1;
        markUnselected(word);
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

  const markUnselected = (word: string) => {
    let i = chosenSet.all_words.indexOf(word);
    document.getElementById(`label${i}`)?.classList.add("unselected");
  };

  // BUTTON EFFECTS:

  const handleCheck = () => {
    checkResult();
    setGameover(true);
  };

  const handleFinish = () => {
    setView("result");
  };

  const handleWordClick = (element: string) => {
    if (gameover) {
      return null;
    }
    // add item to selected list
    if (!selectedWords.includes(element)) {
      setSelectedWords([...selectedWords, element]);
    } else {
      //remove item from selected list
      setSelectedWords(selectedWords.filter((item) => item !== element));
    }
  };

  // RANDOMISER:

  const chooseSet = () => {
    
    // Shuffle chosen set
    function shuffle(set: WordSet) {
      let currentIndex = set.all_words.length,
        randomIndex;
      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [set.all_words[currentIndex], set.all_words[randomIndex]] = [
          set.all_words[randomIndex],
          set.all_words[currentIndex],
        ];
      }
      return set;
    }

    // Choose random set
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
    <>
      <h1>{chosenSet.question}:</h1>
      <GameField>
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
      </GameField>
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
    </>
  );
};
