import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ productsInCart, onModalClose }) {
  return (
    <div className="Header">
      <Link className="logo" to="/" title="На главную">
        <h1>Beer Catalog</h1>
      </Link>
      <div className="signTo" title="Регистрация" onClick={onModalClose}></div>
      <Link className="to-cart-btn" to="/cart" title="В корзину">
        <span className="to-cart-btn__quantity">{productsInCart}</span>
      </Link>
    </div>
  );
}
