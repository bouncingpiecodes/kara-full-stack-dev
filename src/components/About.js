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
            I am a seasoned house project manager and Junior front end
            developer. I have a background in hospitality, sales, and customer
            service. I am excited to venture out into the exciting world of Tech
            as a front-end web developer. I am currently enrolled in the Georgia
            Tech Full Stack coding bootcamp where I am learning Javascript,
            MySql, and react to name a few. I am a team player who thrives in
            groups and loves to take charge when needed.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
