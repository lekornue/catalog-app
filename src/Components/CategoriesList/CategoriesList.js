import React from "react";
import "./CategoriesList.css";
import Search from "../Search/Search";
import Content from "../Content/Content";
import Filter from "../Filter/Filter";
import Pagination from "../Pagination/Pagination";

export default function CategoriesList({
  data,
  dataActive,
  dataCart,
  strSearch,
  productsInCart,
  updateData,
  pugNumber,
}) {
  return (
    <div className="CategoriesList">
      <Search data={data} str={strSearch} updateData={updateData} />
      <Filter data={data} updateData={updateData} />
      <Content
        data={data}
        active={dataActive}
        dataCart={dataCart}
        productsInCart={productsInCart}
        updateData={updateData}
        pugNumber={pugNumber}
      />
      <Pagination updateData={updateData} />
    </div>
  );
}
