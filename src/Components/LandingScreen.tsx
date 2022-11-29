import { useContext } from "react";
import { ScreenWrapper } from "./Styles/Shared.styles";
import { Button, TextField } from "@mui/material";
import { Context } from "./../ContextProvider";

export const LandingScreen = () => {
  const { username, setUsername } = useContext(Context);

  const handleUsername = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setUsername(e.target.value);
      };

  const handlePlay = () => {};

  return (
    <ScreenWrapper>
      <main style={{ paddingBottom: "5em" }}>
        <h1>WordCloud Game</h1>
        <TextField
          type="text"
          placeholder="Enter name"
          onChange={(e) => handleUsername(e)}
        />
        <br />
        <Button
          variant="contained"
          sx={{ margin: "2em" }}
          onChange={handlePlay}
        >
          Play
        </Button>
      </main>
    </ScreenWrapper>
  );
};
