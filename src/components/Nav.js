import React from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav({ pages }) {
  return (
    <nav className="col-12 col-lg-6 p-3 align-self-center align-self-lg-end">
      <div className="nav nav-pills nav-fill d-flex flex-row flex-wrap justify-content-end navbar-nav">
        {pages.map((page) => (
          <div
            key={page.id}
            className="nav-item flex-shrink-1 flex-md-shrink-0 col-6 col-md-1 ms-md-4 me-md-4"
          >
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
