import React, { useState } from "react";
import "./submit.css";

const Home = () => {
  const [showModal, setShowModal] = useState(false); // Controls modal visibility
  const [formSubmitted, setFormSubmitted] = useState(false); // Tracks form submission

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    setFormSubmitted(true); // Set form submission state
    setShowModal(false); // Close the modal
  };

  return (
    <>
      <div className="profile-section">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my journey, experiences, and skills.</p>
      </div>

      <div className="contact-section">
        <button className="phone-button" onClick={() => setShowModal(true)}>
          View Phone Number
        </button>
        {formSubmitted && <p className="phone-number">+91-9433601566</p>}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
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
              <button type="submit">Submit</button>
              <button className="close-button" onClick={() => setShowModal(false)}>
              Close
            </button>
            </form>
            
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
