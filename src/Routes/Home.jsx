import React from 'react'
import Card from '../Components/Card';
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/Global.context';

const Home = () => { 
  const contextData = useContext(ContextGlobal);
  console.log(contextData);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
      {contextData.map((item) => (
        <Card key={item.id} children={item}/>
      ))}
      </div>
    </main>
  )
}

export default Home;