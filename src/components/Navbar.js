import React from 'react'
import { Button } from 'react-bootstrap';
import logo from '../mymizu_white.png'

export default function Navbar(props) {

    function handleClick (e) {
        e.preventDefault();
        props.setCenter(e.target.centerPoint.value);
    }

    return (
        <div className='navbar'>
            <img className="logo" src = { logo } alt = "logo"/>
            <form className="search-form" onSubmit = { handleClick }>
                <input name="centerPoint" type = "text"/>
                <Button type ="submit">Search</Button>
            </form>
        </div>
    )
}


