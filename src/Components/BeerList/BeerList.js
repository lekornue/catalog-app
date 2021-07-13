import React from "react";
import List from "./List/List";
import "./BeerList.css";

export default function BeerList({
  data,
  dataCart,
  productsInCart,
  updateData,
  pugNumber,
}) {
  return (
    <section className="BeerList">
      <div className="header">
        <span>Choice Beer</span>
        <span>Number Beer</span>
        <span>Beer Image</span>
        <span>Beer Name</span>
        <span>Alcohol By Volume</span>
        <span>International Bitterness Units</span>
        <span>Color Units Ebc</span>
      </div>
      <List
        data={data}
        dataCart={dataCart}
        productsInCart={productsInCart}
        updateData={updateData}
        pugNumber={pugNumber}
      />
    </section>
  );
}
