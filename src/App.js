import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character';

const App = () => {
  const [data, setData] = useState([]);
  const [charName, setCharName] = useState(null);


  const openDetails = (name) => {
    setCharName(name);
  }

  const closeDetails = () => {
    setCharName(null);
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        const errMsg = document.createElement('p');
        document.body.appendChild(errMsg);
        errMsg.textContent = err;
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map(char => {
        return (
        <Character 
          key={char.id} 
          info={char} 
          component={Character} 
          openDetails={openDetails}
          closeDetails={closeDetails}
          charName={charName}
          />
          )})}
    </div>
  );
}

export default App;
