import React from "react";
import "./TechnicalSkills.css"; // Make sure this CSS file is linked

const skills = [
  "JavaScript",
  "React",
  "Node.js",
  "HTML & CSS",
  "Python",
  "SQL & NoSQL Databases",
  "Git & GitHub",
  "RESTful APIs",
];

const TechnicalSkills = () => {
  return (
    <div className="technical-skills-container">
      <h1 className="skills-title">Technical Skills</h1>
      <div className="roadmap-wrapper">
        {/* Timeline line */}
        <div className="timeline"></div>
        
        {/* Timeline items */}
        {skills.map((skill, index) => (
          <div
            className="timeline-item"
            key={index}
            style={{ "--i": index }} // Pass the index for animation delay
          >
            <div className="circle" />
            <div className="skill-text">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;
