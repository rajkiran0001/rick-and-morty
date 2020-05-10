import React, { useState, useEffect } from "react";
import axios from "axios";
import AllCharacters from "./AllCharacters";
function Home() {
  const [characters, setCharacters] = useState([]);
  const [characterSearch, setCharacterSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [tillDate, setTillDate] = useState("");
  let [page, setPage] = useState(1);
  const [filteredCharacter, setFilteredCharacter] = useState([]);

  const submitDate = (e) => {
    e.preventDefault();
    var result = characters.filter(function (date) {
      return date.created >= fromDate && date.created <= tillDate;
    });
    setCharacters(result);
  };

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
      Characters:{" "}
      <input
        type="text"
        placeholder="Search characters"
        onChange={(e) => setCharacterSearch(e.target.value)}
      />
      Status:{" "}
      <input
        type="text"
        placeholder="Search Status"
        onChange={(e) => setStatusSearch(e.target.value)}
      />
      <form onSubmit={submitDate}>
        From:{" "}
        <input
          type="text"
          placeholder="2017-11-04"
          onChange={(e) => setFromDate(e.target.value)}
        />
        Till:{" "}
        <input
          type="text"
          placeholder="2017-11-05"
          onChange={(e) => setTillDate(e.target.value)}
        />{" "}
        <button type="submit">Search</button>
      </form>
      <br />
      <div className="container">
        <div className="row">
          {filteredCharacter.slice(0, 10).map((character, id) => (
            <div key={id}>
              <AllCharacters key={id} {...character} />
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
