import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [username, setUserName] = useState('');

  useEffect(() => {
    getNames();
  },[]);

  const getNames =  async () => {
    const response =  await axios.get('/names');
    console.log(response);
    
    setUserName(response.data);
  }

  return (
   <>
   <h1>My Website</h1>
   <h1>My Name is {username}</h1>
   </>
  );
}

export default App;
