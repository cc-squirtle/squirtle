import React from 'react'
import logo from '../mymizu_logo.png'

export default function Navbar() {
    return (
        <div>
            <img className = "logo" src = {logo}/>
            <input type = "text"/>
            <button type = "button">SEARCH</button>
        </div>
    )
}


