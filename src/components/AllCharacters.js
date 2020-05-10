import React from "react";

function AllCharacters(props) {
  const { name, image, species, status, created } = props;
  return (
    <div>
      <p>
        <img src={image} alt={name} />
      </p>
      <p>name: {name}</p>
      <p>species: {species}</p>
      <p>status: {status}</p>
      <p>created: {created.slice(0, 10)}</p>
    </div>
  );
}

export default AllCharacters;
