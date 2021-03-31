import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar　from './components/Navbar';
import Map from './components/Map';
import List from './components/List';

function App() {

  const [center, setCenter] = useState("日本");

  useEffect(()=> {
    console.log("New center ", center);
  }, [center])

  return (
    <div className="App">
      <Navbar setCenter = { setCenter } />
      <Map center={ center }/>
      <List />
    </div>
  );
}

export default App;
