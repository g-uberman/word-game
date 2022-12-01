import { useContext } from "react";
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
    <>
      {username && <h1>Congratulations, {username}!</h1>}
      {!username && <h1>Congratulations!</h1>}
      <h1>Your score:</h1>
      {points > 0 && <h1 className="points">{points} points</h1>}
      {points <= 0 && <h1 className="points negative">{points} points</h1>}
      <br />
      <Button
        variant="contained"
        onClick={handleRestart}
        sx={{ marginBottom: "2.5em" }}
        size="large"
      >
        Play again
      </Button>
    </>
  );
};
