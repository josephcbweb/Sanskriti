import React, { useState } from "react";

import Map from "../map/Map.tsx";
import StateMenu from "../StateMenu/StateMenu.jsx";

import "./Navigate.css";

const Navigate = () => {
  const [isMap, setIsMap] = useState(true);
  const handleClick = () => {
    setIsMap(!isMap);
  };
  return (
    <>
      <div className="title-container">
        <h1 className="sanskriti">
          <a href="/">Sanskriti</a>
        </h1>
      </div>
      <div className="grid-cont">
        <button className="nav-butt" onClick={() => handleClick()}>
          {isMap ? <p>State Menu</p> : <p>Map</p>}
        </button>
        {isMap ? <Map /> : <StateMenu />}
      </div>
    </>
  );
};

export default Navigate;
