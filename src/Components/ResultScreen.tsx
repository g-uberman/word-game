import { useContext } from "react";
import { WhiteWrapper } from "./Styles/Shared.styles";
import { Button } from "@mui/material";
import { Context } from "./../ContextProvider";

export const ResultScreen = () => {
  const { username, setUsername, points, setPoints, setView } = useContext(Context);

  const handleRestart = () => {
    setUsername("");
    setPoints(0);
    setView("landing");
  };

  return (
    <WhiteWrapper>
      {username && <h1>Congratulations, {username}!</h1>}
      {!username && <h1>Congratulations!</h1>}
      <h1>
        Your score:
        <br />
        {points} points
      </h1>
      <br />
      <Button
        variant="contained"
        onClick={handleRestart}
        sx={{ marginBottom: "2.5em" }}
        size="large"
      >
        Play again
      </Button>
    </WhiteWrapper>
  );
};
