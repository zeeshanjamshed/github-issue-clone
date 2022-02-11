import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./common/theme/theme";
import Home from "./components/home/Home";
import "./App.css";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
