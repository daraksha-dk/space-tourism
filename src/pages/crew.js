import React, { useState } from "react";
import Douglas from "../assets/crew/image-douglas-hurley.png";
import Mark from "../assets/crew/image-mark-shuttleworth.png";
import Victor from "../assets/crew/image-victor-glover.png";
import Anousheh from "../assets/crew/image-anousheh-ansari.png";

const detail = {
  douglas: {
    job: "commander",
    missionnor: "douglas hurley",
    content:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  mark: {
    job: "mission specialist",
    missionnor: "mark shuttleworth",
    content:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  victor: {
    job: "pilot",
    missionnor: "victor glover",
    content:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  anousheh: {
    job: "flight engineer",
    missionnor: "anousheh ansari",
    content:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
};
const Crew = () => {
  const [missionName, setMissionName] = useState("douglas");
  const setMission = (missionnor) => {
    setMissionName(missionnor);
  };
  const renderMissionImg = () => {
    if (missionName === "douglas") {
      return <img src={Douglas} alt="douglas" className="name-img" />;
    }
    if (missionName === "mark") {
      return <img src={Mark} alt="mark" className="name-img" />;
    }
    if (missionName === "victor") {
      return <img src={Victor} alt="victor" className="name-img" />;
    }
    if (missionName === "anousheh") {
      return <img src={Anousheh} alt="anousheh" className="name-img" />;
    }
  };

  return (
    <div className="second-container">
      <div className="pickup">
        <h1 className="number-title">
          <span className="number">02</span> MEET YOUR CREW
        </h1>
        <h2 className="job-title">{detail[missionName].job}</h2>
        <p className="name-title">{detail[missionName].missionnor}</p>
        <p className="naming-title">{detail[missionName].content}</p>
        <div className="mission-specialist">
          <button
            onClick={() => setMission("douglas")}
            className="mission-btn"
          ></button>
          <button
            onClick={() => setMission("mark")}
            className="mission-btn"
          ></button>
          <button
            onClick={() => setMission("victor")}
            className="mission-btn"
          ></button>
          <button
            onClick={() => setMission("anousheh")}
            className="mission-btn"
          ></button>
        </div>
      </div>
      <div className="mission-img">{renderMissionImg()}</div>
    </div>
  );
};
export default Crew;
