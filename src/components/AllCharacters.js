import React from "react";
import { Link } from "@reach/router";
import "./global.css"

function AllCharacters(props) {
  const { id, name, image, species, status, created } = props;
  return (
    <div className="characterCard">
      <Link to={`/details/${id}`}>
        <p>
          <img src={image} alt={name} />
        </p>
        <p>name: {name}</p>
        <p>species: {species}</p>
        <p>status: {status}</p>
        <p>created: {created.slice(0, 10)}</p>
      </Link>
    </div>
  );
}

export default AllCharacters;
