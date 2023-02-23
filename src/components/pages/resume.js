import React from "react";
import "../../styles/Resume.css";

export default function Resume() {
  return (
    <div className="container">
      <h2 className="text-center text-lg-start">Resume</h2>
      <br></br>
      <h5>
        <a href="file:///Users/kara/Downloads/Kara%20H.%20Resume.pdf">Resume</a>
      </h5>
      <br></br>
      <div className="d-flex flex-column flex-lg-row container row">
        <div className="d-flex flex-column col-6">
          <h4>Web Dev Skills</h4>
          <ul>
            <lil>fill in later</lil>
          </ul>
        </div>
        <div className="d-flex flex-column col-6">
          <h4>coding languages</h4>
          <ul className="col-9">
            <li>Javascript</li>
            <li>SQL</li>
          </ul>
          <h4>Certifications</h4>
          <ul className="col-9">
            <li>GA Tech FullStack coding bootcamp</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
