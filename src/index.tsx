import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./ContextProvider";
import { GlobalStyle } from "./Components/Styles/GlobalStyle";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <ContextProvider>
        <App />
    </ContextProvider>
  </React.StrictMode>
);

reportWebVitals();
