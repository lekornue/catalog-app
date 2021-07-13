import React from "react";
import uuid from "react-uuid";
import Good from "../List/Good/Good";
import { updateDataCartGoods } from "../../../services/updateDataGoods";
import { updateActive } from "../../../services/updateActive";
import "./List.css";

export default function List({ data, dataCart, productsInCart, updateData }) {
  return (
    <ul id="ulList" className="List">
      {data.map((good) => {
        return (
          <Good
            key={uuid()}
            good={good}
            onAddedToCart={() => {
              updateDataCartGoods(
                good.id,
                dataCart,
                productsInCart,
                updateData,
                data
              );
            }}
            updateActive={({ target }) => {
              updateActive(target, data, updateData);
            }}
          />
        );
      })}
    </ul>
  );
}
