import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "./components/HomePage/HomePage";
import SingleCharacter from "./components/SingleCharacter/SingleCharacter";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>Rick and Morty</h1>
        </Link>
      </header>
      <Router>
        <Home path="/" />
        <SingleCharacter path="/details/:id" />
      </Router>
    </div>
  );
}

export default App;
