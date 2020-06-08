import React from "react";
import sadgif from "../images/tenor.gif";
import "./Error.scss";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="error">
      <img src={sadgif} className="sadgif"></img>
      <h1>Oh no! Page not found</h1>
      <br />
      <h2>ERROR CODE:404</h2>
      <br />
      <p>
        The page you are looking for either does not exist, or has been removed.
        Do check to see if the URL you entered is correct.
      </p>
      <Link to="/">Redirect to A2Z-MM2H homepage --></Link>
    </div>
  );
}
