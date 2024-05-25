import React from "react";
import Subtotal from "./Subtotal";
import { useStateValue } from "./Stateprovider";
import Checkoutproduct from "./Checkoutproduct";
import "../styles/checkout.css";

function Checkout() {
  const [{ basket,user }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="image not loading"
          className="checkout-ad"
        />
        <div>
          <h3>{user?.email}</h3>
          <h2 className="checout-title">Your Shopping Basket</h2>

          {basket.map((item) => (
            <Checkoutproduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
