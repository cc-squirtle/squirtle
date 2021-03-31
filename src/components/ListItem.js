import React from 'react'

export default function ListItem(props) {
    return (
        <div key={props.tap.id}>
            <p>{`${props.tap.name} ${props.tap.address}`}</p>
            <img src={props.tap.photo_url} alt="Tap"></img>
        </div>
    )
}
