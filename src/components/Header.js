import React from "react";
import { default as SearchIcon } from "@mui/icons-material/Search";
import { default as ShoppingBasketIcon } from "@mui/icons-material/ShoppingBasket";
import { NavLink } from "react-router-dom";
import { useStateValue } from "./Stateprovider";
import firebase from "firebase/compat/app";
import { getAuth, signOut } from "firebase/auth";
import "../styles/header.css";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      firebase.getAuth().signOut();
    }
  };

  return (
    <div className="header">
      <NavLink to="/">
        <img
          className="header-logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="image not loading"
        />
      </NavLink>
      <div className="header-search">
        <input type="text" className="header-search-input" />
        <SearchIcon className="header-search-icon" />
      </div>

      <div className="header-nav">
        <div onClick={handleAuthentication} className="header-option">
          <span className="header-option-section1">
            {user ? "Hello " + user?.email : "Hello Guest"}
          </span>
          <NavLink to={!user && "/login"}>
            <span className="header-option-section2">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </NavLink>
        </div>
        <div className="header-option">
          <span className="header-option-section1">Returns</span>
          <span className="header-option-section2">& Orders</span>
        </div>
        <div className="header-option">
          <span className="header-option-section1">Your</span>
          <span className="header-option-section2">Prime</span>
        </div>
        <div className="header-basket-option">
          <NavLink to="/checkout">
            <ShoppingBasketIcon />
          </NavLink>
          <span className="header-option-section2 header-basket-count">
            {basket?.length}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
