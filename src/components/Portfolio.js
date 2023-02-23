import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

import "../styles/Portfolio.css";
import whatToWatch from "./whattowatch.png";

export default function Portfolio() {
  // query for screen size for mobile and tablet conditional render
  const isMobile = useMediaQuery({ query: "(max-width: 700px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1200px)" });

  const portfolioData = [
    {
      title: "What To Watch",
      image: whatToWatch,
      link: "https://jplaisance41.github.io/What-To-Watch-App/",
    },
    {
      title: "What To Watch",
      image: whatToWatch,
      link: "https://jplaisance41.github.io/What-To-Watch-App/",
    },
    {
      title: "What To Watch",
      image: whatToWatch,
      link: "https://jplaisance41.github.io/What-To-Watch-App/",
    },
  ];

  const Item = ({ title, image, link }) => {
    return (
      <>
        <a className="portfolio-link" href={link} alt={title}>
          <div
            style={{ backgroundImage: "url(" + image + ")" }}
            className="portfolio-item"
          >
            <h2>{title}</h2>
          </div>
        </a>
      </>
    );
  };

  return (
    <div className="container">
      <h2>Portfolio</h2>
      <div className="portfolio-items">
        {portfolioData.map((item) => {
          return (
            <Item title={item.title} image={item.image} link={item.link} />
          );
        })}
      </div>
    </div>
  );
}
