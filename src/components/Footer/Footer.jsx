import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Dr. B.C. Roy Engineering College, Jemua Road, Durgapur, West Bengal</span>
          <div className="flexCenter f-menu">
            <span><a href="./web pages/index6.html">Property</a></span>
            <span><a href="./web pages/index4.html">Services</a></span>
            <span><a href="./web pages/index3.html">Contact Us</a></span>
            <span><a href="./web pages/index1.html">About Us</a></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;