import React from "react";
import "./Footer.css";
import { FaGithub, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Left Side - Logo */}
        <div className="footer-image">
          <img src="path_to_your_image.jpg" alt="Logo" />
        </div>

        {/* Right Side - Text Info */}
        <div className="footer-info">
          <p className="footer-text">&copy; 2025 Subhajit Bardhan. All Rights Reserved.</p>
          <p className="footer-text">
            Made with <FaHeart className="heart-icon" /> by Subhajit.{" "}
            <a
              href="https://github.com/subhajit00007903"
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <FaGithub className="github-icon" />
              GitHub
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
