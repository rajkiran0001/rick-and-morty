import React from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import Home from "./components/Home";

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
      </Router>
    </div>
  );
}

export default App;
