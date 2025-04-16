import React from "react";
import "./Home.css";
import image from "../assets/image.png" // Import your image

const Home = () => {
  return (
    <>
      <div className="profile-section">
        <img src={image} alt="Your Profile" className="profile-image" />
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my journey, experiences, and skills.</p>
      </div>

      {/* Internship Section */}
      <div className="internship-section">
        
        <div className="internship-cards">
          <div className="internship-card">
            <h3>OASIS INFOBYTE (Remote)</h3>
            <ul>
              <li>Developed Quiz Android App Using Java</li>
              <li>Developed Calculator App Using Java</li>
              <li>Developed Unit Converter Android App Using Java</li>
            </ul>
          </div>

          <div className="internship-card">
            <h3>Divergent Consultancy Services</h3>
            <p>
              Created the Amul Loyalty App (
              <a
                href="https://play.google.com/store/apps/details?id=com.kf.loyalty"
                target="_blank"
                rel="noopener noreferrer"
              >
                KF Loyalty - Apps on Google Play
              </a>
              ).
            </p>
          </div>
          <div className="internship-card">
            <h3>CIPHERBYTE TECHNOLOGIES (Remote)</h3>
            <p>Worked as a Java Developer specializing in creating innovative solutions.</p>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;
