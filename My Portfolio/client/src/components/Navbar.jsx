import React, { useState } from "react";
import "./Navbar.css"; // Importing CSS file
import logo from "../assets/logo.png"; // Importing logo image
const Navbar = () => {
    

    return (
        <header className="header">
            <div className="logo">
              {/* Add the developer logo here */}
              <img src={logo}  className="developer-logo" />
                
            </div>
           
            <nav className="navbar">
                <a href="/" className="nav-link">Home</a>
                <a href="/about" className="nav-link">About</a>
                <a href="/technical-skills" className="nav-link">Skills</a>
                <a href="#" className="nav-link">Contact</a>
            </nav>
        </header>
    );
};

export default Navbar;
