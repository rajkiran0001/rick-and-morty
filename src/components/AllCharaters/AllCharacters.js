import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";
import "../global.css"

function AllCharacters(props) {
  // destructuring  of the props sent from HomePage component
  const { id, name, image, species, status, created } = props;
  return (
    <div className="characterCard">
      {/* link to the details of every character */}
      <Link to={`/details/${id}`}>
        <p>
          <img src={image} alt={name} />
        </p>
        <p><strong>Name: </strong>{name}</p>
        <p><strong>Species: </strong>{species}</p>
        <p><strong>Status: </strong>{status}</p>
        <p><strong>Created: </strong>{created.slice(0, 10)}</p>
      </Link>
    </div>
  );
}
//Typechecking with proptypes
AllCharacters.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
  created: PropTypes.string,
};

export default AllCharacters;
