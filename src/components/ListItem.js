import React from 'react'
import { Card, Button } from 'react-bootstrap';

export default function ListItem(props) {
    return (
        // <div key={props.tap.id}>
        //     <p>{`${props.tap.name} ${props.tap.address}`}</p>

        //     <img src={props.tap.photo_url} alt="Tap"></img>
        // </div>
        <Card className="tap-card">
            <Card.Img variant="top" src={props.tap.photo_url} alt="Tap" />
            <Card.Body>
                <Card.Title>{props.tap.name}</Card.Title>
                <Card.Text>
                    <p><span className="bold-text">Address:</span> {props.tap.address}</p>
                    <p><span className="bold-text">Comment:</span>{props.tap.comment}</p>
                </Card.Text>
                <Button variant='danger' onClick={() => props.handleDelete(props.tap.id)} >Delete</Button>
            </Card.Body>
        </Card>
    )
}
