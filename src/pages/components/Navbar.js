import * as React from "react"
import "../styles/Navbar.css"

const Navbar = () => {
    return(
        <div className="navbar">
        <div className="navbar-bg"></div>
            <div className="navbar-inner">
                <div className="logo">
                    <p>Maciej Ługowski</p>
                </div>
                <ul className="links">
                    <li className="navbar-link"><a href="#header" >Home</a></li>
                    <li className="navbar-link"><a href="#projects" >Projects</a></li>
                    <li className="navbar-link"><a href="#contact" >Contact</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;