import React from "react";
import { Link } from "react-router-dom"; // Importing Link from react-router-dom
import "./Navbar.css"; // Importing CSS file
import logo from "../assets/logo.png"; // Importing logo image

const Navbar = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Developer Logo" className="developer-logo" />
            </div>

            <nav className="navbar">
                <Link to="/" className="nav-link" activeClassName="active">Home</Link>
                <Link to="/about" className="nav-link" activeClassName="active">About</Link>
                <Link to="/technical-skills" className="nav-link" activeClassName="active">Skills</Link>
                <Link to="/contact" className="nav-link" activeClassName="active">Contact</Link>
            </nav>
        </header>
    );
};

export default Navbar;
