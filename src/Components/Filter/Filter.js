import React from "react";
import ListButton from "./ListButton/ListButton";
import "./Filter.css";

export default function Filter(props) {
  const { data, updateData } = props;

  const types = {
    name: true,
    abv: true,
    ibu: true,
  };

  const sortList = [
    [`byName`, "name"],
    [`byABV`, "abv"],
    [`byIBU`, `ibu`],
  ];

  return (
    <div className="Filter">
      <ListButton
        listTitles={sortList}
        typesFilter={types}
        updateData={updateData}
        data={data}
      />
    </div>
  );
}
