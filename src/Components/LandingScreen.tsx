import { ScreenWrapper } from "./Styles/Shared.styles";
import { Button, TextField } from "@mui/material";

export const LandingScreen = () => {

    
  return (
    <ScreenWrapper>
      <main style={{ paddingBottom: "5em" }}>
        <h1>WordCloud Game</h1>
        <TextField type="text" placeholder="Enter name" />
        <br />
        <Button variant="contained" sx={{ margin: "2em" }}>
          Play
        </Button>
      </main>
    </ScreenWrapper>
  );
};
