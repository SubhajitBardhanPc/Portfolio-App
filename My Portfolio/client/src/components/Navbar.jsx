import React, { useState } from "react";
import "./Navbar.css"; // Importing CSS file

const Navbar = () => {
    

    return (
        <header className="header">
            <div className="logo">MyBrand</div>
           
            <nav className="navbar">
                <a href="#" className="nav-link">Home</a>
                <a href="#" className="nav-link">About</a>
                <a href="#" className="nav-link">Services</a>
                <a href="#" className="nav-link">Contact</a>
            </nav>
        </header>
    );
};

export default Navbar;
