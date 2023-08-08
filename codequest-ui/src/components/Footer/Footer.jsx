import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import codequest_logo from "/src/assets/codequest-logo.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="content">
        <Link to="/">
          <img src={codequest_logo} alt="logo" width="100px" />
        </Link>
        <h3>Copyright © 2023</h3>
        <h3>Privacy Policy</h3>
      </div>
    </div>
  );
}
