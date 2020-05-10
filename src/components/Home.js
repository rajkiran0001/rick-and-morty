import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterDetails from "./CharacterDetails";
function Home() {
  const [characters, setCharacters] = useState([]);
  const [characterSearch, setCharacterSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");
  let [page, setPage] = useState(1);
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

  const fetchPage = (page) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const previousPage = () => {
    if (page >= 2) {
      setPage((page = page - 1));
      fetchPage(page);
    }
  };

  const nextPage = (e) => {
    if (page >= 0) {
      setPage((page = page + 1));
      fetchPage(page);
    }
  };

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
          {filteredCharacter.slice(0, 10).map((character, id) => (
            <div key={id}>
              <CharacterDetails key={id} {...character} />
            </div>
          ))}
        </div>
      </div>

      <b>page: {page >= 1 ? page : "0"}</b>
      <div>
        <button onClick={previousPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
    </>
  );
}

export default Home;
