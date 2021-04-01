import React from 'react';
import { Button } from 'react-bootstrap';
import ListItem from './ListItem';
import axios from 'axios';

export default function List(props) {

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

    return (
        <div>
            <h2>My locations</h2>
            <Button
                className="blue-button"
                onClick={handleSave}
                disabled={!props.hasChanged}
            >
                Save
            </Button>
            {props.hasChanged ? <p className="warning">You have unsaved changes...</p> : null}
            <div className="taps-list">
                {props.myTaps.length ? props.myTaps.map((tap) => <ListItem tap={tap} handleDelete={handleDelete}  />) : null } 
            </div>
        </div>
    )
}
