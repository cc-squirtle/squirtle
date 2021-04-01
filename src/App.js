import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Map from './components/Map';
import List from './components/List';
import axios from 'axios';

function App() {
    const [center, setCenter] = useState('');
    const [myTaps, setMyTaps] = useState([]);
    const [hasChanged, setHasChanged] = useState(false);

    useEffect(() => {
        getMyTaps();
    }, []);

    async function getMyTaps() {
        const data = await axios.get('/api/mytaps');
        setMyTaps(data.data);
    }

    return (
        <div className="App">
            <Navbar setCenter={setCenter} />
            <Map setMyTaps={setMyTaps} center={center} myTaps={myTaps} setHasChanged={setHasChanged} />
            <List myTaps={myTaps} setMyTaps={setMyTaps} hasChanged={hasChanged} setHasChanged={setHasChanged} center={center} />
        </div>
    );
}

export default App;
