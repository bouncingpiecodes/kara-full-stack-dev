import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <header className="d-flex flex-column align-items-center col-12 col-lg-5 p-3 text-center">
      <h1 id="title">Kara Harvey</h1>
      <h4 id="subtitle">Fullstack Web Dev</h4>
      <div id="logoContainer" className="text-center"></div>
    </header>
  );
}
