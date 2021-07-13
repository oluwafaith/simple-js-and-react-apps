import React from 'react'
import {
    Link
} from "react-router-dom";
import "./styles.css"
import Dropdown from "./Dropdown"
function Header() {
    return (
        <div className="container">
            <p>logo</p>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Services</Link>
                <Link to="/">Student Portal</Link>
                <Dropdown />

        </div>
    )
}

export default Header
