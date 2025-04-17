import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setShowModal(false);
  };

  return (
    <div className="contact-container">
      {/* Row 1: Phone and LinkedIn */}
      <div className="row">
        <div
          className="contact-card phone-card"
          onClick={() => setShowModal(true)}
        >
          <h3>Phone</h3>
          {!formSubmitted ? (
            <p>Click to View</p>
          ) : (
            <>
              
              <p>+91-6289970438</p>
            </>
          )}
        </div>
        <a
          href="https://linkedin.com/in/subhajitbardhan"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card linkedin-card"
        >
          <h3>LinkedIn</h3>
          <p>View Profile</p>
        </a>
      </div>

      {/* Row 2: GitHub Profiles */}
      <div className="row">
        <a
          href="https://github.com/subhajit00007903"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card github-card"
        >
          <h3>GitHub Profile 1</h3>
          <p>Visit GitHub (Profile 1)</p>
        </a>
        <a
          href="https://github.com/SubhajitBardhanPc"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card github-card"
        >
          <h3>GitHub Profile 2</h3>
          <p>Visit GitHub (Profile 2)</p>
        </a>
      </div>

      {/* Email Card */}
      <a
        href="mailto:subhajitbardhan1@gmail.com"
        className="contact-card email-card email-center"
      >
        <h3>Email</h3>
        <p>subhajitbardhan1@gmail.com</p>
      </a>

      {/* Popup Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="modal-close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h3>Submit Your Details</h3>
            <form onSubmit={handleSubmit}>
              <label>
                Email:
                <input type="email" required />
              </label>
              <label>
                Phone:
                <input type="tel" required />
              </label>
              <label>
                Company Name:
                <input type="text" required />
              </label>
              <div className="button-row">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button
                  type="button"
                  className="close-btn"
                  onClick={() => setShowModal(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
