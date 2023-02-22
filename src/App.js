import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Container from "./components/Container";

const App = () => {
  return (
    <Router>
      <Container />
    </Router>
  );
};

export default App;
