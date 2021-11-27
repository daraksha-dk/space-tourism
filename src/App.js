import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import MainComponent from "./components/mainComponent";
import Destination from "./pages/destination";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

import { useLocation, Routes, Route } from "react-router-dom";

function App() {
  const location = useLocation();
  const [bgClass, setBgClass] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setBgClass("bg-home");
    } else if (location.pathname === "/destination") {
      setBgClass("bg-destination");
    } else if (location.pathname === "/crew") {
      setBgClass("bg-crew");
    } else if (location.pathname === "/technology") {
      setBgClass("bg-technology");
    }
  }, [location]);

  return (
    <div className={`App ${bgClass}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/destination" exact element={<Destination />} />
        <Route path="/crew" exact element={<Crew />} />
        <Route path="/technology" exact element={<Technology />} />
      </Routes>
    </div>
  );
}
export default App;
