import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <h1 className="about-title">About Me</h1>

            {/* Heritage Institute of Technology */}
            <div className="about-card">
                <h2 className="card-heading">🎓 B.Tech</h2>
                <p>
                    I’m <strong>Subhajit Bardhan</strong>, a passionate and curious developer currently in my final year of B.Tech in Computer Science and Business Systems at{" "}
                    <a 
                        href="https://heritageit.edu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="edu-link"
                    >
                        Heritage Institute of Technology, Kolkata
                    </a>.  
                    <br />CGPA: <strong>8.02</strong> (till 7th semester)
                </p>
            </div>

            {/* Diploma Education */}
            <div className="about-card">
                <h2 className="card-heading">🎓 Diploma Education</h2>
                <p>
                    Completed my Diploma in Computer Science and Technology from{" "}
                    <a 
                        href="https://polytechnic.wbtetsd.gov.in/thecalcuttatechnicalschool" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="edu-link"
                    >
                        The Calcutta Technical School
                    </a>.  
                    <br />CGPA: <strong>8.5</strong>
                </p>
            </div>

            {/* Secondary Education */}
            <div className="about-card">
                <h2 className="card-heading">🏫 Secondary Education</h2>
                <p>
                    Completed secondary education from{" "}
                    <a 
                        href="https://www.bing.com/search?q=birati+high+school&form=EX0050&refig=c33a28835172483ab1e4fe72d21f2178&pc=U531&ucpdpc=UCPD&filters=local_ypid:YN4070x245995188&shtp=GetUrl&shid=b5b00f6c-0967-49ae-8e97-ac483f149c33&shtk=QmlyYXRpIEhpZ2ggU2Nob29s&shdk=Rm91bmQgb24gQmluZy4%3D&shhk=RzjST4H94lnKaM%2Fd6j5ARtk2f7NaQWuGNm2hezr28LQ%3D" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="edu-link"
                    >
                        Birati High School
                    </a>.  
                    <br />Percentage: <strong>66.85%</strong>
                </p>
            </div>
        </div>
    );
};

export default About;
