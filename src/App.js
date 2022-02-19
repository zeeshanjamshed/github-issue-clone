import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./common/theme/theme";
import Auth from "./components/authentication/Auth";
import Protected from "./components/authentication/Protected";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import Bugs from "./components/bugs/Bugs";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route exact path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
          </Route>
          {/* protected routes */}
          <Route path="/" element={<Protected />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bugs" element={<Bugs />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
