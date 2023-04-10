import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

export const  Card = (cards) => {
  const [user, setUsers] = useState([]); 


  useEffect(()=>{
    cards.children ? setUsers(cards.children) : console.log("");;
  }, [ user, cards.children])

  const addFav = (userFav)=>{
    const users = localStorage.getItem('favoritosCard') || '[]';
    let usersArray = JSON.parse(users);
    usersArray.some(u => u.id === userFav.id) ? console.log("Esta card ya existe") : usersArray.push(user ); 
    localStorage.setItem('favoritosCard', JSON.stringify(usersArray))
  }

  return (
      <div className="card">
          <p>{user.id}</p>
        <Link to={`/dentista/${user.id}`} >
          <h2>{user.name}</h2>
        </Link>
          <p>Username : {user.username}</p> 
          <button onClick={()=>addFav(user)} className="favButton">Add fav</button>
      </div>
    )
};

export default Card;
