import React from "react";
import Card from '../Components/Card';

const Favs = () => {

  const favs = localStorage.getItem('favoritosCard') || '[]';
  const favsArray = JSON.parse(favs);
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {favsArray.map((card) => (
          <Card key={card.id} children={card}/>
        ))}
      </div>
    </>
  );
};

export default Favs;
