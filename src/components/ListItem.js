import React from 'react'
import { Card, Button } from 'react-bootstrap';

export default function ListItem(props) {
    return (
        <Card className="tap-card">
                <Card.Img variant="top" src={props.tap.photo_url} alt="Tap" />
                <Card.Body className="card-body">
                    <div className="card-top">
                        <Card.Title>{props.tap.name}</Card.Title>
                        <Card.Text>
                            <p><span className="bold-text">Address:</span> {props.tap.address}</p>
                            <p><span className="bold-text">Comment:</span>{props.tap.comment}</p>
                        </Card.Text>
                    </div>
                    <div className="button-wrapper">
                        <Button className="blue-button" onClick={() => props.handleDelete(props.tap.id)} >Delete</Button>
                    </div>
                </Card.Body>

        </Card>
    )
}
