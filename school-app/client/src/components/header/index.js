import React from 'react'
import {
    Link
} from "react-router-dom";
import "./styles.css"
import Dropdown from "./Dropdown"
function Header() {
    return (
        <div className="navContainer">
            <p style={{fontSize:"30px"}}> Dandel School</p>
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Services</Link>
                <Link to="/">Admissions</Link>
                <Link to="/">Contact Us</Link>
                <Dropdown />

        </div>
    )
}

export default Header
