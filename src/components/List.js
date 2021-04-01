import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import ListItem from './ListItem';
import axios from 'axios';

export default function List(props) {
  const [list, setList] = useState('all');

  useEffect(()=> {
    if (props.hasChanged) {
      handleSave();
    }
  }, [props.hasChanged])

  async function handleSave() {
    props.setHasChanged(false);
    let saveList = props.myTaps.map((tap) => {
      return {
        mymizu_id: tap.id,
        name: tap.name,
        longitude: tap.longitude,
        latitude: tap.latitude,
        address: tap.address,
        comment: tap.comment,
        photo_url: tap.photo_url,
        list: tap.list
      };
    });

        // API call to insert list to db...
        let result = await axios.post('/api/mytaps', saveList);
        console.log(result);
    }

    function handleDelete(id) {
        props.setMyTaps(props.myTaps.filter((tap) => tap.id !== id));
        props.setHasChanged(true);
    }

  function getLists() {
    let mySet = new Set();
    props.myTaps.forEach(tap => {
      console.log("inside forEach - tap", tap);
      mySet.add(tap.list)
    });
    console.log("set", mySet);
    return [...mySet];
  }

  function handleListChange(event) {
    setList(event.target.value);
  }

  return (
      <div>
          <select onChange={handleListChange}>
                <option value="all">all saved</option>
                {props.myTaps.length ? getLists().map(list => (
                  <option key={list} value={list}>{list}</option>
                )) : null}
              </select>
          <div className="taps-list">
              {props.myTaps.length ? 
                (list === 'all' ? 
                  props.myTaps.map((tap) => <ListItem tap={tap} handleDelete={handleDelete} />) 
                  : props.myTaps.filter(tap => tap.list === list).map((tap) => <ListItem tap={tap} handleDelete={handleDelete} />) ) 
                : null } 
          </div>
      </div>
  )
}
