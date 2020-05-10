import React, { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(characters);

  return <div></div>;
}

export default Home;
