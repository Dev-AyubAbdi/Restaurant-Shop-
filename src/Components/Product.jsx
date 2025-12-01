import React, { useEffect, useState } from "react";
import useShop from "../Context/ShopContext";

export const Product = ({ product }) => {
  const [isCartIn, setIsCartIn] = useState(false);
  const { addToCart, Products, removeTOCart } = useShop();

  useEffect(() => {
    const isCart = Products.filter((pro) => pro.id == product.id);

    if (isCart.length > 0) {
      setIsCartIn(true);
    } else {
      setIsCartIn(false);
    }
  }, [Products]);

  const handleAddtoCart = () => {
    if (isCartIn) {
      removeTOCart(product)
    } else {
      addToCart(product);
    }
  };
  return (
    <div
      className="card"
      style={{
        minHeight: "100%",
        background: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)),
        url(${product.urlImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="info">
        <span>{product.name}</span>
        <span>${product.price}</span>
      </div>
      <button
        className={`btn ${isCartIn ? "btn-secondary" : "btn-primary "}`}
        onClick={handleAddtoCart}
      >
        {isCartIn ? "-" : "+"}
      </button>
    </div>
  );
};
