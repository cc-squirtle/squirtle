import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Map from './components/Map';
import List from './components/List';

function App() {
  const [myTaps, setMyTaps] = useState([]);

  useEffect(()=> {
    console.log("tap list", myTaps)
  }, [myTaps]);

  return (
    <div className="App">
      <Navbar />
      <Map setMyTaps={setMyTaps} />
      <List myTaps={myTaps} />
    </div>
  );
}

export default App;
