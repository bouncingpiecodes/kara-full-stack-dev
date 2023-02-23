import React from "react";
import "../styles/Resume.css";

export default function Resume() {
  return (
    <div className="container resume">
      <h2>Resume</h2>
      <div className="d-flex flex-column flex-lg-row container row">
        <div className="d-flex flex-column col-6">
          <h4>Coding Languages and Frameworks</h4>
          <ul className="col-9">
            <li>ES6/Javascript</li>
            <li>SQL</li>
            <li>MongoDb</li>
            <li>Mongoose</li>
            <li>Nodejs</li>
            <li>CSS</li>
            <li>SASS</li>
            <li>React</li>
            <li>ExpressJS</li>
            <li>GraphQL</li>
            <li>Heroku</li>
          </ul>
          <h4>Certifications</h4>
          <ul className="col-9">
            <li>GA Tech FullStack coding bootcamp</li>
          </ul>
        </div>
        <a href="https://docs.google.com/document/d/12iqPV0Yvd7mThIptjaB1s8yCKYOfs_RH0uP0dOaRlA4/edit?usp=sharing">
          Full Resume Here
        </a>
      </div>
    </div>
  );
}
