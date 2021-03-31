import React, { useState, useEffect } from 'react'
import './App.css';
import Navbar　from './components/Navbar';
import Map from './components/Map';
import List from './components/List';

function App() {

  const [center, setCenter] = useState("");
  const [myTaps, setMyTaps] = useState([]);

  useEffect(()=> {
    console.log("New center ", center);
  }, [center])
  
    useEffect(()=> {
      console.log("tap list", myTaps)
    }, [myTaps]);

  return (
    <div className="App">
      <Navbar setCenter = { setCenter } />
      <Map setMyTaps={setMyTaps}  center={ center } />
      <List myTaps={myTaps} setMyTaps={setMyTaps} />
    </div>
  );
}

export default App;
