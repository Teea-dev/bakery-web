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
                <span>Home</span>
              </li>
              <li className="venus ">
                <span>Menu</span>
              </li>
              <li className="earth ">
                <span>About Us</span>
              </li>
              <li className=" ">
                <span className="mars">Our Story</span>
              </li>
              <li className=" jupiter ">
                <span>Blog</span>
              </li>
              <li className=" saturn ">
                <span>Contact</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
