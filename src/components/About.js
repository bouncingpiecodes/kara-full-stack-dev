import React from "react";
import "../styles/About.css";
import karaPhoto from "./headshot.jpg";

// function for my about me section on portfolio
export default function About() {
  return (
    <div className="container">
      <h2>About Me</h2>
      <div className="about">
        <img id="bio-photo" src={karaPhoto} alt="pic of kara" />
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
