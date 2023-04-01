import React from "react";
import menu from "../menu.json";
import "../App.scss";
import Map from "../components/map";
import Footer from "../components/footer";
import Navbar from "../components/Nav";
import { motion } from "framer-motion";
const Menu = () => {
  const menu0 = "OUR MENU";
  const animatedMenu = menu0.split("");

  const menu1 = "Discover our menu chart";
  const animatedMenu1 = menu1.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.04 * 0.1,
      },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="menu-heading">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="menu-intro"
          >

            {animatedMenu.map((animatedMenu, index) => {
              return (
                <motion.span
                  className="animated-menu"
                  key={index}
                  variants={child}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {animatedMenu}
                </motion.span>
              );
            })}

            <div className="animated-menu-top"> 
              {animatedMenu1.map((animatedMenu1, index) => {
                return (
                  <motion.span
                    className="animated-menu1"
                    key={index}
                    variants={child}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {animatedMenu1}
                  </motion.span>
                );
              })}
            </div>

            <h4>Most popular picks</h4>
          </motion.div>
          <div className="side-text">
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him case in packages enquire we up
              ecstatic.. Through True Rich Attended does no end it his mother
            </p>
          </div>
        </div>
        <ul className="menu-ul">
          <li>All</li>
          <li>Fast Food</li>
          <li> Cofee</li>
          <li>Cocktails</li>
          <li>Quafe Cake</li>
          <li>Snacks</li>
        </ul>
        <div className="menu">
          {Object.keys(menu).map((key) => (
            <div key={key}>
              <div className="menu-item">
                <span className="card">
                  <img src={menu[key].image} alt={menu[key].product} />
                  <div className="description">
                    <h3>{menu[key].product}</h3>
                    <p>${menu[key].price}</p>
                  </div>
                </span>
              </div>
            </div>
          ))}
          {/* {Object.keys(menu).map((key) => (
            <div key={key}>
              <div className="menu-item">
                <span className="card">
                  <img src={menu[key].image} alt={menu[key].product} />
                  <div className="description">
                    <h3>{menu[key].product}</h3>
                    <p>${menu[key].price}</p>
                  </div>
                </span>
              </div>
            </div>
          ))} */}
        </div>
        <Map />
        <Footer />
      </div>
    </>
  );
};

export default Menu;
