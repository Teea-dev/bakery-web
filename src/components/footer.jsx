import React from "react";
import Logo from "../assets/images/Logo.svg";
import "./footer.scss";
import { FaFacebookF} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Menu</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Our story</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <div className="copyright">
            <p>© 2021 Finsweet | All rights reserved. </p>
          </div>
          <ul>
            <li>
              <a href="#">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaInstagram/>
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          <div className="contact">
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
