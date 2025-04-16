import React from "react";
import "./Footer.css";
import { FaGithub, FaHeart } from 'react-icons/fa';
import logo from "../assets/logo.png"; // Import your logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo */}
        <div className="footer-image">
          <img src={logo} alt="Logo" />
        </div>

        {/* Center Text */}
        <div className="footer-center">
          <p className="footer-text">&copy; 2025 Subhajit Bardhan. All Rights Reserved.</p>
          <p className="footer-text">Made with <FaHeart className="heart-icon" /> by Subhajit</p>
        </div>

        {/* GitHub Repos */}
        <div className="footer-links">
          <a
            href="https://github.com/SubhajitBardhanPc"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link pink"
          >
            <FaGithub className="github-icon" /> Main Repo
          </a>
          <a
            href="https://github.com/subhajit00007903"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link blue"
          >
            <FaGithub className="github-icon" /> Side Project
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
