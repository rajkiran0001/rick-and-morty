import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import "./global.css"

function AllCharacters(props) {
  const { id, name, image, species, status, created } = props;
  return (
    <div className="characterCard">
      <Link to={`/details/${id}`}>
        <p>
          <img src={image} alt={name} />
        </p>
        <p><strong>Name: </strong>{name}</p>
        <p><strong>species: </strong>{species}</p>
        <p><strong>status: </strong>{status}</p>
        <p><strong>created: </strong>{created.slice(0, 10)}</p>
      </Link>
    </div>
  );
}

AllCharacters.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  created: PropTypes.string,
};

export default AllCharacters;
