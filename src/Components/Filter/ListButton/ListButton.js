import React from "react";
import uuid from "react-uuid";
import "./ListButton.css";
import { filterByType } from "../../../services/filterByType";

export default function ListButton({ listTitles, typesFilter, updateData, data }) {
  return (
    <ul className="ListButton">
      {listTitles.map((el) => {
        return (
          <li
            key={uuid()}
            className="listItem"
            onClick={() => filterByType(typesFilter, el[1], updateData, data)}
          >
            <button>{el[0]}</button>
          </li>
        );
      })}
    </ul>
  );
}
