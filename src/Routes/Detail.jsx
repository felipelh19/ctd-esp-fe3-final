import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const  Detail = () => {
  const [card, setCard] = useState([]);
  const param = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${param.id}`)
    .then((response)=> response.json())
    .then((dataApi)=> setCard(dataApi))
  }, [param.id])

  return (
      <div className="card-grid">
        <div className="card" key={card.id}>
        <h1>Detail Dentist {card.id}</h1>
          <h3>{card.name}</h3>
          <p>{card.email}</p> 
          <p>{card.phone}</p>
          <p>{card.website}</p> 
        </div>
      </div>
  
  );
};

export default Detail;