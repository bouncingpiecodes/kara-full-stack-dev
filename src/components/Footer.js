import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { ImStackoverflow } from "react-icons/im";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="d-flex justify-content-center">
      <a
        className="m-2 footer-icon"
        href="https://github.com/bouncingpiecodes"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub />
      </a>
      <a
        className="m-2 footer-icon"
        href="https://www.linkedin.com/in/kara-renee-harvey/"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillLinkedin />
      </a>
    </footer>
  );
}
