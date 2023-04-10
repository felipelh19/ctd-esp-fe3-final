import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'

export const  Card = (c) => {
  const [user, setUsers] = useState([]); 


  useEffect(()=>{
    c.children ? setUsers(c.children) : console.log("");;
  }, [ user, c.children])

  const addFav = (uFav)=>{
    const users = localStorage.getItem('favoritosCard') || '[]';
    let usersArray = JSON.parse(users);
    usersArray.some(u => u.id === uFav.id) ? console.log("Esta card ya existe") : usersArray.push(user ); 
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
