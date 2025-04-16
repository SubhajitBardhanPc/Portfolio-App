import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Row 1: Phone and LinkedIn */}
      <div className="row">
        <a href="tel:+919433601566" className="contact-card phone-card">
          <h3>Phone</h3>
          <p>+91-9433601566</p>
          <br></br>
          <p>+91-6289970438</p>
        </a>
        <a href="https://linkedin.com/in/subhajitbardhan" target="_blank" rel="noopener noreferrer" className="contact-card linkedin-card">
          <h3>LinkedIn</h3>

          <br />
          <p>View Profile</p>
        </a>
      </div>

      {/* Row 2: GitHub Profiles */}
      <div className="row">
        <a href="https://github.com/subhajit00007903" target="_blank" rel="noopener noreferrer" className="contact-card github-card">
          <h3>GitHub Profile 1</h3>
          <br />
          <p>Visit GitHub (Profile 1)</p>
        </a>
        <a href="https://github.com/SubhajitBardhanPc" target="_blank" rel="noopener noreferrer" className="contact-card github-card">
          <h3>GitHub Profile 2</h3>
          <br />
          <p>Visit GitHub (Profile 2)</p>
        </a>
      </div>

      {/* Email Card */}
      <a href="mailto:subhajit.bardhan.csbs25@heritageit.edu.in" className="contact-card email-card email-center">
        <h3>Email</h3>
        <br />
        <p>subhajitbardhan1@gmail.com</p>
      </a>
    </div>
  );
};

export default Contact;
