import React from "react";
import "../styles/subtotal.css";
import CurrencyFormat from "react-currency-format";
import { NavLink ,useNavigate} from "react-router-dom";

import { GetBasketTotal } from "./Reducer";
import { useStateValue } from "./Stateprovider";

function Subtotal() {
  const navigate = useNavigate();
  const proceedCheckout = () =>{
    navigate("/payment");
  }
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal-gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={GetBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={proceedCheckout}>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
