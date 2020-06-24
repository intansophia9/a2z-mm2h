import React from "react";
import logo2 from "../../images/edited2.svg";
import { FaRegCopyright } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
//import {MdEmail} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="column">
        <Link to="/">
          <img src={logo2} className="footerLogo" alt="a2z" />
          <br />
          <br />
          <p>Malaysia My Second Home</p>
        </Link>
      </div>
      <div className="column2">
        <p>
          <u>Quick Links</u>
        </p>
        <Link to="/about">About</Link>
        <br />
        <Link to="/procedures">Procedures</Link>
        <br />
        <Link to="/benefits">Benefits</Link>
        <br />
        <a href="http://www.designerapartments.com.my/">
          Designer Apartments
        </a>{" "}
      </div>
      <div className="column2">
        <p>
          <u>Get in touch!</u>
        </p>
        <FaPhone /> <a href="tel:+60342703464">+603-42703464</a>
        <br />
        <br />
        <FaMapMarkerAlt />
        <a href="https://goo.gl/maps/t1ky9zGceQJfDf95A">
          E3-1 1st Floor, Block E, Jalan Selaman 1/2, Dataran Palma Off Jalan
          Ampang, 68000 Ampang, Selangor, Malaysia.
        </a>
      </div>
      <div className="footer-bottom">
        <p className="copyrightFooter">
          <FaRegCopyright /> Copyright 2014 A2Z-MM2H<p>All rights reserved</p>
        </p>
      </div>
    </footer>
  );
}
