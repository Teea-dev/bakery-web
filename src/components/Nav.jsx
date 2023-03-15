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
{/* <nav className=" nav-bar">
<a href="/">
  <img src={Logo} className="logo d-none d-md-block" alt="logo" />
  <img
    src={Small}
    className="logo d-block d-md-none small-logo"
    alt="logo"
  />
</a>
<div className="toggle-button" onClick={openNav}>
  <span className="bar"></span>
  <span className="bar"></span>
  <span className="bar"></span>
</div>

<div className= {`nav-links ${open ? "nav-links active" : " nav-links "}` }>
  <ul>
    <li>
      <a href="/"  className="active " title="Homepage">
        Home
      </a>
    </li> */}
//     <li>
//       <a href="/about.html" title="Menu">
//         About
//       </a>
//     </li>
//     <li>
//       <a href="/work.html" title="About Us">
//         Work
//       </a>
//     </li>
//     <li>
//       <a href="/contact.html" title="">
//         Contact
//       </a>
//     </li>
//     <li>
//       <a href="/contact.html" title="Contact-page">
//         Contact
//       </a>
//     </li>
//     <li>
//       <a href="/contact.html" title="Contact-page">
//         Contact
//       </a>
//     </li>
//     <li>
//       <a href="/contact.html" title="Contact-page">
//         Contact
//       </a>
//     </li>
//   </ul>
// </div>
// </nav>
// </div>

// const openNav = () =>{
//   setOpen( !open);

//   }


// STYLES FOR THE NAVBAR
// .nav-bar {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 80px;
//   background-color: #fff;
//   z-index: 100;
//   padding: 0 20px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   transition: all 0.5s ease;
// }

// .nav-bar .logo {
//   width: 100px;
//   height: 100px;
// }

// .toggle-button {
//   position: absolute;
//   top: 2rem;
//   right: 1rem;
//   display: none;
//   flex-direction: column;
//   justify-content: space-between;
//   width: 30px;
//   height: 21px;
// }

// .toggle-button .bar {
//   height: 3px;
//   width: 100%;
//   background-color: var(--brand-color);
//   border-radius: 10px;
// }

// 900PX
// @media screen and (max-width: 900px) {
 
// .toggle-button {
//   display: flex;
// }
// .nav-links {
//   display: none;
// }
// .nav-bar {
//   flex-direction: column;
//   align-items: flex-start;
// }
// .nav-links ul {
//   flex-direction: column;
//   width: 100%;
// }
// .nav-links li {
//   text-align: center;
// }

// .nav-links.active {
//   display: block;
//   margin: 0 auto;
// }