import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ClearWrapper } from "./Styles/Shared.styles";
import { Button, TextField } from "@mui/material";
import { Context } from "./../ContextProvider";

export const LandingScreen = () => {
  const { username, setUsername } = useContext(Context);
  const navigate = useNavigate();

  const handleUsername = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        setUsername(e.target.value);
      };

  const handlePlay = () => {
    navigate("/game");
  };

  return (
      <ClearWrapper>
        <h1>WordCloud Game</h1>
        <TextField
          type="text"
          placeholder="Enter name"
          onChange={(e) => handleUsername(e)}
        />
        <br />
        <Button
          variant="contained"
          onClick={handlePlay}
        >
          Play
        </Button>
      </ClearWrapper>

  );
};
