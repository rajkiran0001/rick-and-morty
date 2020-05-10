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

  return (
    <>
      <div className="container">
        <div className="row">
          {characters.map((character, id) => (
            <div key={id}>
              <div>
                <p>
                  <img src={character.image} alt={character.name} />
                </p>
                <p>name: {character.name}</p>
                <p>species: {character.species}</p>
                <p>status: {character.status}</p>
                <p>created: {character.created.slice(0, 10)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
