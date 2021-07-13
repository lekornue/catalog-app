import React from "react";

import "./DetailInfo.css";

const Info = ({ active }) => {
  return (
    <>
      <img className="image" src={`${active["image_url"]}`} alt="" />
      <div>
        <span>Beer name</span> - {active.name}
      </div>
      <div>
        <span>Tagline</span> - {active.tagline}
      </div>
      <div>
        <span>Description</span> - {active.description}
      </div>
      <div>
        <span>Food pairing</span> - {active["food_pairing"]}
      </div>
    </>
  );
};

export default function DetailInfo({ active }) {
  return (
    <div className="DetailInfo">
      {active ? <Info active={active} /> : `Loading...`}
    </div>
  );
}
