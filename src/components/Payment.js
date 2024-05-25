import React, { useState, useEffect } from "react";
import Checkoutproduct from "./Checkoutproduct";
import CurrencyFormat from "react-currency-format";
import "../styles/Payment.css";
import axios from "./axios";

import { useStateValue } from "./Stateprovider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { NavLink, useNavigate } from "react-router-dom";
import { GetBasketTotal } from "./Reducer";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  //telling stripe how much amount must be collected
  React.useEffect(() => {
    //generate the special stripe secret which allows us to charge th customer

    //axios is popular fetching library
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",

        //Stripe expects the total in currencies subunits that is why *1000
        url: `/payments/create?total=₹{getBasketTotal(basket)*100}`,
      });

      setClientSecret(response.data.clinetSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    //button disabled while credit card details are being entered
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        navigate.replace("/orders");
      });
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.erroe.message : "");
  };

  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          Checkout (<NavLink to="/checkout">{basket.length} items</NavLink>)
        </h1>
        {/* payment section - delivery address */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address </h3>
          </div>
          <div className="payment-address">
            {/* using optional chaining if at all user is undefined */}
            <p>{user?.email}</p>
            <p>123 AB Road</p>
            <p>Chennai</p>
          </div>
        </div>

        {/* payment section - review items */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-items">
            {basket.map((item) => (
              <Checkoutproduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/* payment section - payment method*/}
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            {/* stripe magic will go here */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={GetBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disable={processing || disabled || succeeded}>
                  <span>
                    {processing ? <p>Processing</p> : <p>"Buy now"</p>}
                  </span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
