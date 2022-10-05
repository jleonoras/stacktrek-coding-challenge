import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="App-header">
      <h1>Error 404</h1>
      <p>Page not found...</p>
      <Link to="/" className="App-link">
        Back to Home
      </Link>
    </section>
  );
};

export default Error;
