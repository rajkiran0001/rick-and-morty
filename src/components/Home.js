import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterDetails from "./CharacterDetails";
function Home() {
  const [characters, setCharacters] = useState([]);
  const [characterSearch, setCharacterSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");

  const [filteredCharacter, setFilteredCharacter] = useState([]);

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

  useEffect(() => {
    setFilteredCharacter(
      characters.filter(
        (character) =>
          character.name
            .toLowerCase()
            .includes(characterSearch.toLowerCase()) &&
          character.status.toLowerCase().includes(statusSearch.toLowerCase())
      )
    );
  }, [characterSearch, statusSearch, characters]);

  return (
    <>
      <input
        type="text"
        placeholder="Search characters"
        onChange={(e) => setCharacterSearch(e.target.value)}
      />
      <input
        type="text"
        placeholder="Search Status"
        onChange={(e) => setStatusSearch(e.target.value)}
      />

      <div className="container">
        <div className="row">
          {filteredCharacter.map((character, id) => (
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
