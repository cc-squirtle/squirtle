import React from 'react'
import ListItem from './ListItem'

export default function List(props) {

    function handleSave() {
        if (!props.myTaps.length){
            alert("nothing to save");
        }

        // API call to delete current list?
        let saveList = props.myTaps.map(tap => {
            return {
                mymizu_id: tap.id,
                name: tap.name,
                longitude: tap.longitude,
                latitude: tap.latitude,
                address: tap.address,
                comment: tap.comment,
                photo_url: tap.photo_url
            }
        })
        console.log(saveList);
        // API call to insert list to db...
    }

    return (
        <div>
            <h2>List</h2>
            <button
            onClick={handleSave}>
                save
            </button>
            {props.myTaps.length && props.myTaps.map((tap) => <ListItem tap={tap} />)} 
        </div>
    )
}
