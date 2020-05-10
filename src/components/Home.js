import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterDetails from "./CharacterDetails";
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

  return (
    <>
      <div className="container">
        <div className="row">
          {characters.map((character, id) => (
            <div key={id}>
              <CharacterDetails key={id} {...character} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
