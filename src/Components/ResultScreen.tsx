import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClearWrapper } from "./Styles/Shared.styles";
import { Button, TextField } from "@mui/material";
import { Context } from "./../ContextProvider";

export const ResultScreen = () => {
  const { username, setUsername, points, setPoints } = useContext(Context);
  const navigate = useNavigate();

  const handleRestart = () => {
    setUsername("");
    setPoints(0);
    navigate("/");
  };

  return (
    <ClearWrapper>
      {username && <h1>Congratulations, {username}!</h1>}
      {!username && <h1>Congratulations!</h1>}
      <h1>
        <br />
        Your score:
        <br />
        {points} points
      </h1>
      <Button variant="contained" onClick={handleRestart}>
        Play again
      </Button>
    </ClearWrapper>
  );
};
