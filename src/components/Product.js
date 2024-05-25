import React from "react";
import "../styles/Product.css";
import { useStateValue } from "./Stateprovider";

function Product({ id, title, price, image, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD-TO-BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div>
        <div className="product-info">
          <p>{title}</p>
          <p className="product-price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
