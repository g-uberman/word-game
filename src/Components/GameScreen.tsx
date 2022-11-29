import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenWrapper } from "./Styles/Shared.styles";
import { Button, TextField } from "@mui/material";
import { Context } from "./../ContextProvider";

export const GameScreen = () => {
  const { username, setPoints } = useContext(Context);
  const [gameover, setGameover] = useState(false);
  const navigate = useNavigate();

  const handleCheck = () => {
    setGameover(true);
    setPoints(0);
  };

  const handleFinish = () => {
    navigate("/result");
  };

  return (
    <>
      <h1>Select animals</h1>
      <ScreenWrapper></ScreenWrapper>
      {!gameover &&
      (<Button
        variant="contained"
        sx={{ margin: "24.65px" }}
        onClick={handleCheck}
      >
        Check answers
      </Button>)}
      {gameover &&
      (<Button
        variant="contained"
        sx={{ margin: "24.65px" }}
        onClick={handleFinish}
      >
        Finish game
      </Button>)}
    </>
  );
};
