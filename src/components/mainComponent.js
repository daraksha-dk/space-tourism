import React from "react";
import { Link } from "react-router-dom";

const MainComponent = () => {
  return (
    <div className="main-page">
      <div className="first">
        <h1 className="first-line">
          SO, YOU WANT TO TRAVEL TO
          <span className="second-line">SPACE</span>
        </h1>
        <p className="first-para">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="explore-container">
        <Link to="/destination" className="explore-btn">
          Explore
        </Link>
      </div>
    </div>
  );
};
export default MainComponent;
