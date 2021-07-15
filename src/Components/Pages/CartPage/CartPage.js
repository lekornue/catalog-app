import React from "react";
import uuid from "react-uuid";
import { deleteDataCartGoods } from "../../../services/deleteDataGoods";
import "./CartPage.css";

export default function CartPage({
  data,
  dataCartGoods,
  productsInCart,
  updateData,
}) {
  const renderRow = ({ name, abv, ibu, image_url, id }, i) => {
    return (
      <tr key={uuid()}>
        <td>{i + 1}</td>
        <td>{name}</td>
        <td>{abv}</td>
        <td>{ibu}</td>
        <td>
          <img src={image_url} alt="" />
        </td>
        <td>
          <div
            className="trashBtn"
            onClick={() => {
              deleteDataCartGoods(
                id,
                dataCartGoods,
                productsInCart,
                updateData,
                data
              );
            }}
          ></div>
        </td>
      </tr>
    );
  };

  return (
    <div className="CartPage">
      <h1>Basket Goods</h1>
      <table className="cart-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Alcohol By Volume</th>
            <th>International Bitterness Units</th>
            <th>Image</th>
            <th>Remove Good</th>
          </tr>
        </thead>
        <tbody>{dataCartGoods.map(renderRow)}</tbody>
      </table>
    </div>
  );
}
