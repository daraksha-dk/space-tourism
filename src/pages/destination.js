import React, { useState } from "react";
import Moon from "../assets/destination/image-moon.png";
import Mars from "../assets/destination/image-mars.png";
import Europe from "../assets/destination/image-europa.png";
import Titan from "../assets/destination/image-titan.png";
const details = {
  moon: {
    avgDistance: 384400,
    travelTime: 3,
    duration: "days",
    name: "Moon",
    para: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  },
  mars: {
    avgDistance: 225,
    unit: "MIL",
    travelTime: 9,
    duration: "month",
    name: "Mars",
    para: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  },
  europe: {
    avgDistance: 628,
    unit: "MIL",
    travelTime: 3,
    duration: "years",
    name: "Europe",
    para: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  },
  titan: {
    avgDistance: 1.6,
    unit: "BIL",
    travelTime: 7,
    duration: "years",
    name: "Titan",
    para: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  },
};
const Destination = () => {
  const [planetName, setPlanetName] = useState("moon");
  const setPlanet = (name) => {
    setPlanetName(name);
  };

  const renderPlanetImg = () => {
    if (planetName === "moon") {
      return <img src={Moon} alt="Moon" className="moon-spin" />;
    }
    if (planetName === "mars") {
      return <img src={Mars} alt="Mars" className="mars-spin" />;
    }
    if (planetName === "europe") {
      return <img src={Europe} alt="Mars" className="europe-spin" />;
    }
    if (planetName === "titan") {
      return <img src={Titan} alt="Mars" className="titan-spin" />;
    }
  };

  return (
    <div className="second-container">
      <div className="pickup">
        <h1 className="number-title">
          <span className="number">01</span> PICK YOUR DESTINATION
        </h1>
        <div className="destination-img">{renderPlanetImg()}</div>
      </div>
      <div className="planet-container">
        <div className="planet-btn">
          <button onClick={() => setPlanet("moon")} className="planet-items ">
            moon
          </button>
          <button onClick={() => setPlanet("mars")} className="planet-items ">
            mars
          </button>
          <button onClick={() => setPlanet("europe")} className="planet-items ">
            europe
          </button>
          <button onClick={() => setPlanet("titan")} className="planet-items ">
            titan
          </button>
        </div>
        <div className="content">
          <h1 className="moon-name">{details[planetName].name}</h1>
          <p className="naming">{details[planetName].para}</p>
        </div>
        <hr className="horizon " />
        <div className="planet-meta">
          <div className="distance">
            <h3 className="last-heading">Avg. distance</h3>
            <p className="time">
              {details[planetName].avgDistance}
              {details[planetName].unit}.KM
            </p>
          </div>
          <div className="duration-time">
            <h3 className="last-heading">Est. travel time</h3>
            <p className="time">
              {details[planetName].travelTime}
              {details[planetName].duration}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destination;
