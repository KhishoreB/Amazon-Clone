import React from "react";
import { useStateValue } from "./Stateprovider";

import "../styles/Checkoutproduct.css";

function Checkoutproduct({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type:'REMOVE-FROM-BASKET',
      id:id,
    })
  };

  return (
    <div className="checkout-product">
      <img
        className="checkout-product-image"
        src={image}
        alt="Image not loading"
      />
      <div className="checkout-product-info">
        <p className="checkout-product-title">{title}</p>
        <p className="checkout-product-price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkout-product-rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
}

export default Checkoutproduct;
