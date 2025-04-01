import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="/footer-logo.png"></img>
      </div>
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer;