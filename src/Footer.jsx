import React from "react";
import "./Footer.css";

const Footer = () => (
  <div className="Footer">
    <FooterSec />
  </div>
);

const FooterSec = () => (
  <div className="Footer-sec">
    <div className="Footer-icon">
      <i class="fab fa-facebook"></i>
      <i class="fab fa-instagram"></i>
      <i class="fab fa-twitter"></i>
    </div>
    <h2>copy rights@1990-2015 IMDB.com.inc</h2>
  </div>
);

export default Footer;
