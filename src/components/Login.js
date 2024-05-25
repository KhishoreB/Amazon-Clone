import React, { useState } from "react";
import firebase from "firebase/compat/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "./Firebase";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const auth = getAuth();

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);

        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <NavLink to="/">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="Image not loading"
        />
      </NavLink>
      <div className="login-container">
        <h1>Sign In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            name=""
            id=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>Password</h5>
          <input
            type="password"
            name=""
            id=""
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            onClick={signIn}
            className="login-signin-button"
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Clone Conditions of Use & Sale.
          Please see our Privact Notice,our Cookies Notice and our
          Interest-Based Ads Notice
        </p>
        <button onClick={register} className="login-register-button">
          Create your amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
