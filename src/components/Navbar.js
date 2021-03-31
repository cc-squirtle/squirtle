import React from 'react'
import logo from '../mymizu_logo.png'

export default function Navbar(props) {

    function handleClick (e) {
        e.preventDefault();
        props.setCenter(e.target.centerPoint.value);
    }

    return (
        <div>
            <img className = "logo" src = { logo } alt = "logo"/>
            <form onSubmit = { handleClick }>
                <input name="centerPoint" type = "text"/>
                <button type ="submit">SEARCH</button>
            </form>
        </div>
    )
}


