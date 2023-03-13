import React, { useEffect, useState } from "react";
import "./nav.scss";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.svg";


function Navbar() {
  const [visibility, setVisibility] = useState(false);
  useEffect(() => {
    setVisibility(false);
  }, []);

  return (
    <>
      <nav className="Navbar">
        <div className="NavbarContent">
          <div className="NavbarContentHeader">
            <img src={Logo} alt="" />
          </div>
          <div className="links">
            <ul className={visibility ? "visibleNav" : "inVisibleNav"}>
              <li className="mercury ">
                <Link to="/">Home</Link>
              </li>
              <li className="venus ">
                <Link to="/menu">Menu</Link>
              </li>
              <li className="earth ">
                <Link to="/about">About Us</Link>
              </li>
              <li className=" ">
                <Link to="/story">Our Story</Link>
              </li>
              <li className=" jupiter ">
                <Link to="/blog">Blog</Link>  
              </li>
              <li className=" saturn ">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
