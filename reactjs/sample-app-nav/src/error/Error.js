import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Error = () => {
  return (
    <section className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Error 404</h1>
      <p>Page not found...</p>
      <Link to="/" className="App-link">
        Back to Home
      </Link>
    </section>
  );
};

export default Error;
