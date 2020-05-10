import React from "react";
import "./App.css";
import { Link } from "@reach/router";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">
          <h1>Rick and Morty</h1>
        </Link>
      </header>
    </div>
  );
}

export default App;
