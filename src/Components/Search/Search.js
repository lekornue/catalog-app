import React from "react";
import "./Search.css";
import { searchByName } from "../../services/searchByName";

export default function Search({ data, str, updateData }) {
  function search({ target }) {
    searchByName(data, updateData, target);
  }

  return (
    <div className="Search">
      <img src="https://img.icons8.com/metro/50/000000/search.png" alt="" />
      <input
        value={str}
        type="text"
        placeholder={`search by name`}
        onChange={search}
      />
    </div>
  );
}
