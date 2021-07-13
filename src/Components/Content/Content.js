import React from "react";
import "./Content.css";
import BeerList from "../BeerList/BeerList";
import DetailInfo from "../DetailInfo/DetailInfo";

export default function Content({
  data,
  active,
  dataCart,
  productsInCart,
  updateData,
  pugNumber,
}) {
  return (
    <div className="Content">
      <BeerList
        data={data}
        dataCart={dataCart}
        productsInCart={productsInCart}
        updateData={updateData}
        pugNumber={pugNumber}
      />
      <DetailInfo active={active} />
    </div>
  );
}
