import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Email Card */}
      

      {/* Phone Card */}
      <div className="contact-card phone-card">
        <h3>Phone</h3>
        <p>+91-9433601566</p>
      </div>

      {/* LinkedIn Card */}
      <div className="contact-card linkedin-card">
        <h3>LinkedIn</h3>
        <a href="https://linkedin.com/in/subhajitbardhan" target="_blank" rel="noopener noreferrer">
          View Profile
        </a>
      </div>

      {/* GitHub Card */}
      <div className="contact-card github-card">
        <h3>GitHub</h3>
        <a href="https://github.com/subhajit00007903" target="_blank" rel="noopener noreferrer">
          Visit GitHub
        </a>
      </div>
      <div className="contact-card email-card">
        <h3>Email</h3>
        <p>subhajit.bardhan.csbs25@heritageit.edu.in</p>
      </div>
    </div>
  );
};

export default Contact;
