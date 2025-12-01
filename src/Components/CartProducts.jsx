import React from "react";
import useShop from "../Context/ShopContext";


export const CartProducts = () => {

    const {Products, total, removeTOCart} = useShop()
 
  return (
    <div className="cart-products">
      <h2>Cart Products</h2>
      {Products.map((product) => (
        <div className="cart-product">
            <div className="cart-title-img">
                <img src={product.urlImage} alt="" />
                <span>{product.name}</span>
            </div>
            <h5>{product.price}</h5>
            <span className="Delete" onClick={()=> removeTOCart(product)}>x</span>
        </div>
        
      ))}
      <div className="total-price">
        <h2>total Price : ${total}</h2>
      </div>
    </div>
  );
};
