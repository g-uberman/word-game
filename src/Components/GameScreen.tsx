import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ScreenWrapper } from "./Styles/Shared.styles";
import { Button, TextField } from "@mui/material";
import { Context } from "./../ContextProvider";

export const GameScreen = () => {
  const { username } = useContext(Context);
  const navigate = useNavigate();

  const handleCheck = () => {
    navigate("/result");
  };

  return (
    <>
      <h1>Select animals</h1>
      <ScreenWrapper>{username}</ScreenWrapper>
      <Button variant="contained" sx={{ margin: "24.65px" }} onClick={handleCheck}>
        Check answers
      </Button>
    </>
  );
};
