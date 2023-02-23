import React from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav({ pages }) {
  return (
    <nav>
      <div className="nav-container">
        {pages.map((page) => (
          <div key={page.id}>
            <NavLink
              className="nav-item nav-link"
              activeclassname="nav-item nav-link nav-link-active"
              to={`/Development-Portfolio/${page.link}`}
            >
              {page.name}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
}
