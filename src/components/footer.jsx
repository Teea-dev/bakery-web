import React from "react";
import Logo from "../assets/images/Logo.svg";
import "./footer.scss";
import { FaFacebookF} from "react-icons/fa";
import { FaTwitter} from "react-icons/fa";
import { FaInstagram} from "react-icons/fa";
import { FaLinkedin} from "react-icons/fa";
import { Link } from "react-router-dom";

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
             <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/story">Our Story</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
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
