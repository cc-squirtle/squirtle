import React from 'react'

export default function ListItem(props) {
    console.log(props.spot)
    return (
        <div>
            <p>{`${props.spot.name} ${props.spot.address}`}</p>
            <img src={props.spot.pic}></img>
        </div>
    )
}
