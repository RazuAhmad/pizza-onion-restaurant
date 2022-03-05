import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footerMain">
      <div>
        <img src="https://i.ibb.co/cQNkkkK/logo2.png" alt="" />
      </div>
      <div className="footerInner">
        <div>
          <p>About Online food</p>
          <p>Read our blog</p>
          <p>Sign up to deliver</p>
          <p>Add your restaurant</p>
        </div>
        <div>
          <p>Get help</p>
          <p>Read FAQs</p>
          <p>View all cities</p>
          <p>Restaurants near me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
