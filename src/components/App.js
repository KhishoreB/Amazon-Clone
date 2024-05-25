// import logo from './logo.svg';
import React, { useEffect } from "react";
import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./Stateprovider";
import {auth} from "./Firebase"
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51N9vIeSBKLOcXfw1fA2TIuFA7sx4i2duJWPszSgNj1O1rlFLNcjxta8dMi1WTuwehdtSBIqN6OnWNx9j9hAU4SBa00Riqa5z0D');

function App() {
  const [basket, dispatch] = useStateValue();

  useEffect(() => {
    //will run only once when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is>>>", authUser);

      if (authUser) {
        dispatch({
          type: "SET-USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET-USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment/>
                </Elements>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
