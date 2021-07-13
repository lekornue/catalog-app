import React from "react";
import "./Good.css";

export default function Good({ good, onAddedToCart, updateActive }) {
  const buyInput = good.inCart ? (
    <input id={good.id} type="checkbox" defaultChecked />
  ) : (
    <input
      id={good.id}
      type="checkbox"
      onChange={() => {
        onAddedToCart();
      }}
    />
  );

  return (
    <li onClick={updateActive} id={good.id} className="ListItem">
      {buyInput}
      <span id={good.id}>{good.id ? good.id : "no value"}</span>
      <img
        id={good.id}
        className="beerImg"
        src={`${good["image_url"] ? good["image_url"] : "no value"}`}
        alt=""
      />
      <span id={good.id}>{good.name ? good.name : "no value"}</span>
      <span id={good.id}>{good.abv ? good.abv : "no value"}</span>
      <span id={good.id}>{good.ibu ? good.ibu : "no value"}</span>
      <span id={good.id}>{good.ebc ? good.ebc : "no value"}</span>
    </li>
  );
}
