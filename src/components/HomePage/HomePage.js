import React, { useState, useEffect } from "react";
import axios from "axios";
import AllCharacters from "../AllCharaters/AllCharacters";
import "../global.css"

function HomePage() {
  const [characters, setCharacters] = useState([]);
  const [characterSearch, setCharacterSearch] = useState("");
  const [statusSearch, setStatusSearch] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [tillDate, setTillDate] = useState("");
  let [page, setPage] = useState(1);
  const [filteredCharacter, setFilteredCharacter] = useState([]);
// onclick submit event of two different dates
  const submitDate = (e) => {
    e.preventDefault();
    var result = characters.filter(function (date) {
      return date.created >= fromDate && date.created <= tillDate;
    });
    setCharacters(result);
  };
//api is called when the page is initial loaded
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
//filter the characters array based on user search. It is called only when the user search for the character 
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
//fetch the charecters based on page number and set it to character variable
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
//On everyclick decrement the page by one 
  const previousPage = () => {
    if (page >= 2 && page <= 31) {
      setPage((page = page - 1));
      fetchPage(page);
    }
  };
//On everyclick increment the page by one 
  const nextPage = (e) => {
    if (page >= 0 && page <= 29) {
      setPage((page = page + 1));
      fetchPage(page);
    }
  };

  return (
    <>
      <strong className="myClass">Characters:</strong>{" "}
      <input
      className="input"
        type="text"
        placeholder="Search Characters. Rick, Beth..."
        onChange={(e) => setCharacterSearch(e.target.value)}
      />
      <strong>Status:</strong>{" "}
      <input
        type="text"
        className="input"
        placeholder="Search Status. Alive, Dead..."
        onChange={(e) => setStatusSearch(e.target.value)}
      />
      <form onSubmit={submitDate}>
        <strong>From:</strong>{" "}
        <input
          type="date"
          className="input"
          min="2016-11-04"
          max="2022-12-31"
          onChange={(e) => setFromDate(e.target.value)}
        />
        <strong>Till:</strong>{" "}
        <input
          type="date"
          className="input"
          min="2016-11-04"
          max="2022-12-31"
          onChange={(e) => setTillDate(e.target.value)}
        />{" "}
        <button type="submit">Search</button>
      </form>
      <br />
      {/* filter array of the characters based on user input and reduce it to 10 characters per page. AllCharacters component is called for every character in the array*/}
        <div className="mainCards">
          {filteredCharacter.slice(0, 10).map((character, id) => (
            <div key={id} >
              <AllCharacters key={id} {...character} />
            </div>
          ))}
        </div>
      <b>Page: {page >= 1 && page <= 29? page : "30"}</b>
      <div >
        <button className="button" data-test="pagination" onClick={previousPage}>Previous Page</button>
        <button className="button" onClick={nextPage}>Next Page</button>
      </div>
    </>
  );
}

export default HomePage;
