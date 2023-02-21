import React from "react";
import "../styles/Header.css";
import mmmLogo from "../images/mmm-web-logo.svg";

export default function Header() {
  return (
    <header className="d-flex flex-column align-items-center col-12 col-lg-5 p-3 text-center">
      <h1 id="title">Kara Harvey</h1>
      <h4 id="subtitle">Fullstack Web Dev</h4>
      <div id="logoContainer" className="text-center">
        <img id="logoImg" src={mmmLogo} alt="mmm site logo" />
      </div>
    </header>
  );
}
