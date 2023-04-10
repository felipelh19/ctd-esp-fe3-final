import React from "react";
import { useState } from "react";

const Form = (props) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const hNombre = (e) => {
    setErrorMessage("");
    setNombre(e.target.value)};

  const hEmail = (e) => {
    setErrorMessage("");
      setEmail(e.target.value)
  };

function validar(nombre, email){
    if(nombre === "" || email === ""){
        setErrorMessage("El nombre y el email son obligatorios debe agregarlos");
        return
    }
    const nombreerrorMessage = nombre.replace(/^\s+|\s+$/gm,'');
    if(nombreerrorMessage.length < 5){
      setErrorMessage("El nombre debe tener al menos 5 caracteres.");
      return
    }
    return
}

function handleDatos(e){
    e.preventDefault();
    validar(nombre, email);
}

  return (
    <div className="flex">
      <form onSubmit={handleDatos} >  
        <div className="form">
          <div className="input">
              <label htmlFor="nombre">Name  </label>  
              <input type="text" id="nombre" value={nombre} onChange={hNombre} />
          </div>
          <div className="input">
              <label htmlFor="email">Email  </label>
              <input type="email" id="email" value={email} onChange={hEmail}/>
          </div>
          <div className="button">
              <button type="submit">SEND</button>
          </div>
          <div className="alert">
              {errorMessage ? <p>{errorMessage}</p> : null}
              
          </div>
        </div>
      </form>  
    </div>
  );
};

export default Form;
