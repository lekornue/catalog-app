import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import "./Pagination.css";

export default function Pagination({ data, updateData }) {
  let pagList = ["<", "1", "2", "3", "4", ">"];

  const [pugNum, setPugNum] = useState(0);

  useEffect(() => {
    let pug = +pugNum === 0 ? 0 : +pugNum * 5 - 5;
    updateData({
      pugNumber: pugNum,
      dataActive: data[pug],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pugNum]);

  function updatePaginationNum({ target }) {
    if (+target.textContent) {
      setPugNum(target.textContent);
    } else {
      if (target.textContent === ">") {
        setPugNum((prev) => +prev + 1);
      } else setPugNum((prev) => +prev - 1);
    }
  }

  return (
    <ul className="Pagination">
      {pagList.map((el) => {
        let pug = pugNum === 0 ? 1 : pugNum;
        return (
          <li key={uuid()} className="listItem">
            <button
              className={+pug === +el ? "active" : ""}
              onClick={updatePaginationNum}
            >
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
