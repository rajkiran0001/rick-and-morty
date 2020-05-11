import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import "../global.css"

function SingleCharacter(route) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
//it runs when the user clicks the character. the id is passed as props
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${route.id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [route.id]);
//conditional rendering of the elements. Data is rendered once the result is available
  return loading ? (
    <p data-test="loading">Loading...</p>
  ) : (
    <div className="characterCard">
      <img alt={data.image} src={data.image} />
       <p><strong>Gender:</strong> {data.gender}</p>
      <p><strong>Origin: </strong>{data.origin.name}</p>
      <div>
        <h1 className="episode">Episodes</h1>
        {data.episode.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}
//Typechecking with proptypes
SingleCharacter.propTypes = {
  gender: PropTypes.string,
  name: PropTypes.string,
  image: PropTypes.string,
  episode: PropTypes.arrayOf(PropTypes.string)
};

export default SingleCharacter;
