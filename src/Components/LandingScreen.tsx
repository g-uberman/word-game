import { useContext } from "react";
import { Button, TextField } from "@mui/material";
import { Context } from "./../ContextProvider";

export const LandingScreen = () => {
  const { setUsername, setView } = useContext(Context);

  const handleUsername = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsername(e.target.value);
  };

  const handlePlay = () => {
    setView("game");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handlePlay();
    }
  };

  return (
    <>
      <h1 className="title">WordCloud</h1>
      <a className="subtitle" href="https://github.com/g-uberman" target="blank">by Grzegorz Uberman</a>
      <TextField
        type="text"
        placeholder="Player name"
        onChange={(e) => handleUsername(e)}
        onKeyDown={(e) => handleEnter(e)}
        sx={{ margin: "1em" }}
      />
      <br />
      <Button
        variant="contained"
        onClick={handlePlay}
        sx={{ marginBottom: "2.5em" }}
        size="large"
      >
        Play
      </Button>
    </>
  );
};
