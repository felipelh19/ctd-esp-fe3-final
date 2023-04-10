import { createContext } from "react";
import { useState, useEffect } from "react";


export const ContextGlobal = createContext(undefined);

export const DataProvider = ({ children }) => {

  const [dataApi, setDataApi] = useState([])


  useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=> response.json())
      .then((data)=> setDataApi(data))
  }, [])


  return (
    <ContextGlobal.Provider value={dataApi}>
      {children}
    </ContextGlobal.Provider>
  );
};
