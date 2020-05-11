import React, { useState, useEffect } from "react";
import axios from "axios";

function SingleCharacter(route) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

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

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      <img alt={data.image} src={data.image} />
      <p>{data.gender}</p>
      <p>{data.origin.name}</p>
      <div>
        <h1 className="episode">Episodes</h1>
        {data.episode.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
}

export default SingleCharacter;
