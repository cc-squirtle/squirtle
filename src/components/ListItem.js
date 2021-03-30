import React from 'react'

export default function ListItem(props) {
    return (
        <div>
            <p>{`${props.spot.name} ${props.spot.address}`}</p>
            <img src={props.spot.pic}></img>
        </div>
    )
}
