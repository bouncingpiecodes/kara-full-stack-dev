import React from "react";
import "../../styles/About.css";
import karaPhoto from "./headshot.jpg";

// function for my about me section on portfolio
export default function About() {
  return (
    <div className="m-5 mt-0 mb-0 d-flex flex-column align-items-center align-items-lg-start">
      <h2>About Me</h2>
      <div className="d-flex flex-column flex-lg-row align-items-center justify-content-lg-between">
        <img
          className="align-self-center align-self-lg-start"
          id="bio-photo"
          src={karaPhoto}
          alt="pic of kara"
        ></img>
        <div className="mt-3 col-12 col-lg-8">
          <p></p>
          <br></br>
          <p></p>
        </div>
      </div>
    </div>
  );
}
