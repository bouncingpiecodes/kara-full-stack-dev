import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import { useTransition, animated, config, easings } from "react-spring";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import pageList from "../data/pageList";

export default function Container() {
  let location = useLocation();

  const slideLeftTransition = useTransition(location, {
    from: {
      position: "absolute",
      opacity: 0,
      transform: "translate3d(100%, 0, 0)",
    },
    enter: {
      position: "relative",
      opacity: 1,
      transform: "translate3d(0%, 0, 0)",
    },
    leave: {
      position: "absolute",
      opacity: 0,
      transform: "translate3d(-60%, 0, 0)",
    },
    config: { duration: 600, easing: easings.easeInOutCubic },
  });

  return (
    <div>
      <div
        style={{ maxWidth: "99vw" }}
        className="d-flex flex-column flex-lg-row justify-content-between"
      >
        <Header />
        <Nav pages={pageList} location={location} />
      </div>
      {slideLeftTransition((props, item) => (
        <animated.div style={props} config={config}>
          <Routes location={item}>
            <Route path="/Development-Portfolio" element={<About />} />
            <Route path="/Development-Portfolio/work" element={<Portfolio />} />
            <Route
              path="/Development-Portfolio/contact"
              element={<Contact />}
            />
            <Route path="/Development-Portfolio/resume" element={<Resume />} />
          </Routes>
        </animated.div>
      ))}
      <div style={{ maxWidth: "99vw" }}>
        <Footer />
      </div>
    </div>
  );
}
