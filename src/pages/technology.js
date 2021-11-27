import React, { useState } from "react";
import Launch from "../assets/technology/image-launch-vehicle-portrait.jpg";
import SpacePort from "../assets/technology/image-spaceport-portrait.jpg";
import SpaceCapsule from "../assets/technology/image-space-capsule-portrait.jpg";

const spaceDetail = {
  launch: {
    rocketName: "LAUNCH VEHICLE",
    spaceContent:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  spaceport: {
    rocketName: "SPACEPORT",
    spaceContent:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  spacecapsule: {
    rocketName: "SPACE CAPSULE",
    spaceContent:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
};

const Technology = () => {
  const [spaceName, setSpaceName] = useState("launch");
  const setspace = (spaceName) => {
    setSpaceName(spaceName);
  };
  const renderspaceImg = () => {
    if (spaceName === "launch") {
      return <img src={Launch} alt="launch" className="rocket-img" />;
    }
    if (spaceName === "spaceport") {
      return <img src={SpacePort} alt="spaceport" className="rocket-img" />;
    }
    if (spaceName === "spacecapsule") {
      return (
        <img src={SpaceCapsule} alt="spacecapsule" className="rocket-img" />
      );
    }
  };

  return (
    <div className="second-container">
      <div className="pickup">
        <h1 className="number-title">
          <span className="number">03</span> Space launch 101
        </h1>
        <div className="tech-content">
          <div className="number-btn">
            <button
              onClick={() => setspace("launch")}
              className={`vehicle-btn ${spaceName === "launch" && "active"}`}
            >
              1
            </button>
            <button
              onClick={() => setspace("spaceport")}
              className={`vehicle-btn ${spaceName === "spaceport" && "active"}`}
            >
              2
            </button>
            <button
              onClick={() => setspace("spacecapsule")}
              className={`vehicle-btn ${
                spaceName === "spacecapsule" && "active"
              }`}
            >
              3
            </button>
          </div>
          <div className="content">
            <h2 className="job-title">THE TERMINOLOGY</h2>
            <p className="name-title">{spaceDetail[spaceName].rocketName}</p>
            <p className="naming-title">
              {spaceDetail[spaceName].spaceContent}
            </p>
          </div>
        </div>
      </div>
      <div className="tech-img">{renderspaceImg()}</div>
    </div>
  );
};
export default Technology;
