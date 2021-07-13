import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import "./Pagination.css";

export default function Pagination({ updateData }) {
  let pagList = ["<", "1", "2", "3", "4", ">"];

  const [pugNum, setPugNum] = useState(0);

  /*   useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${pugNum}&per_page=5`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log("hello");
        let dataPag =
          data[0].id === dataForPag[0].id
            ? Object.values({ ...data, ...dataForPag })
            : data;
        updateData({
          data: dataPag,
          dataActive: data[0],
          loading: false,
          pugNumber: +pugNum,
        });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pugNum]); */

  useEffect(() => {
    updateData({
      pugNumber: pugNum,
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
