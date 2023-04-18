import React, { useEffect } from "react";
import Hero from "../assets/images/Header.jpg";
import About from "../assets/images/about1.png";
import About2 from "../assets/images/about2.jpg";
import cake from "../assets/images/cake.svg";
import cocktail from "../assets/images/cocktail.svg";
import coffe from "../assets/images/coffe.svg";
import grill from "../assets/images/grill.svg";
import burger from "../assets/images/burger.svg";
import snack from "../assets/images/snack.svg";
import coffemaker from "../assets/images/coffeMaker.jpg";
import beans from "../assets/images/coffebeans.jpg";
import ham from "../assets/images/ham.jpg";
import bread from "../assets/images/bread.jpg";
import Map from "../components/map";
import Footer from "../components/footer";
import menu from "../menu.json";
import { Link } from "react-router-dom";

import axios from "axios";
import "../App.scss";

import Navbar from "../components/Nav";
import { motion } from "framer-motion";

function Home() {
  //Testing Api
  useEffect(() => {
    axios
      .get(
        "https://api.spoonacular.com/recipes/random?apiKey=aec5cc338c32493bbcc56578e47aeb4d&number=3&tags=dessert"
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const word = "We serve high quality foods of all kinds.";
  const animateWord = word.split("");

  const word2 = "KNOW MORE ABOUT US.";
  const animateAbout = word2.split("");

  const word3 = "We source sustainable & line caught Foods.";
  const animateAbout2 = word3.split("");

  const word4 = "WHAT WE ARE SERVING.";
  const serving = word4.split("");

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
  const heroItems = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 6,
        type: "spring",
        mass: 2,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  const location = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 7,
        type: "spring",
        mass: 2,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  const contact = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 7,
        type: "spring",
        mass: 2,
      },
    },
    hidden: {
      opacity: 0,
      y: 100,
    },
  };
  const serve = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        type: "spring",
        mass: 2,
      },
    },
  };

  return (
    <div className="container">
      <Navbar />
      <div className="hero">
        <div className="hero-text">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.5, duration: 1 }}
          >
            {animateWord.map((animateWord, index) => {
              return (
                <motion.span
                  key={index}
                  variants={child}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {animateWord}
                </motion.span>
              );
            })}
          </motion.div>
          <motion.p
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 4,
                duration: 1,
                type: "spring",
                mass: 2,
              },
            }}
          >
            Our food is made with fresh ingredients and we have a great variety
            of dishes
          </motion.p>
          <Link className="button" to="/menu">
            View menu
          </Link>

          <motion.h3
            variants={heroItems}
            initial="hidden"
            whileInView="visible"
          >
            Opening Times
          </motion.h3>
          <motion.p variants={heroItems} initial="hidden" whileInView="visible">
            Sunday - Saturday | 9am - 11pm
          </motion.p>

          <motion.h3 variants={location} initial="hidden" whileInView="visible">
            {" "}
            Location
          </motion.h3>
          <motion.p variants={location} initial="hidden" whileInView="visible">
            {" "}
            Master Canteen, BBSR, Odisha 752054
          </motion.p>
          <motion.h3 variants={contact} initial="hidden" whileInView="visible">
            Call Us
          </motion.h3>
          <motion.p variants={contact} initial="hidden" whileInView="visible">
            {" "}
            +91 1234567890
          </motion.p>
        </div>
        <div className="hero-image">
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 2,
                duration: 1,
                type: "spring",
                mass: 2,
              },
            }}
            src={Hero}
            alt="hero"
          />
        </div>
      </div>
      <div className="about-us">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
          className="item-1"
        >
          {animateAbout.map((animateAbout, index) => {
            return (
              <motion.span
                className="about"
                key={index}
                variants={child}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {animateAbout}
              </motion.span>
            );
          })}
          <div>
            {animateAbout2.map((animateAbout2, index) => {
              return (
                <motion.span
                  className="about2"
                  key={index}
                  variants={child}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {animateAbout2}
                </motion.span>
              );
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 1,
              delay: 1,
              duration: 0.5,
              type: "tween",
            },
          }}
          className="item"
        >
          <h3>10+ People</h3>
          <p>
            We are small team
            <br />
            <br />
            Through True Rich Attended does no end it his mother since
            favourable.
          </p>
          <Link className="button" to="/menu">
            View menu
          </Link>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 1,
              delay: 1.5,
              duration: 0.5,
              type: "tween",
            },
          }}
          className="item"
        >
          <h3>2014</h3>
          <p>
            We are from
            <br />
            <br />
            Through True Rich Attended does no end it his mother since
            favourable.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 100,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delayChildren: 1,
              delay: 2,
              duration: 0.5,
              type: "tween",
            },
          }}
          className="item"
        >
          <h3>200K</h3>
          <p>
            We served
            <br />
            <br />
            Through True Rich Attended does no end it his mother since
            favourable.
          </p>
        </motion.div>

        <div className="item-5">
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 1,
                type: "spring",
                mass: 2,
              },
            }}
            src={About}
            alt="know more image 1"
          />
        </div>
        <div className="item-6">
          <motion.img
            initial={{
              opacity: 0,
              y: 0,
            }}
            whileInView={{
              opacity: 1,
              y: 100,
              transition: {
                delay: 1.25,
                duration: 1,
                type: "spring",
                mass: 2,
              },
            }}
            src={About2}
            alt="know more image 2"
          />
        </div>
      </div>

      <div className="serve">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
          className="serve-1"
        >
          {serving.map((serving, index) => {
            return (
              <motion.span
                className="about-1"
                key={index}
                variants={child}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {serving}
              </motion.span>
            );
          })}

          <motion.h1 variants={serve} initial="hidden" whileInView="visible">
            We all have to eat, so why not do it beautifully.
          </motion.h1>
        </motion.div>
        <p>
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic..
          Through True Rich Attended does no end it his mother
        </p>
      </div>
      <div className="service">
        <div className="service-1">
          <div className="cake">
            <div className="icon">
              <img src={cake} className="" alt="" />
            </div>

            <h2>Quafe Cake</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
          <div className="cocktail">
            <div className="icon">
              <img src={cocktail} alt="" />
            </div>

            <h2>Cocktails</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
        </div>

        <div className="service-2">
          <div className="coffe">
            <div className="icon">
              <img className="" src={coffe} alt="" />
            </div>
            <h2>Coffe</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
          <div className="grill">
            <div className="icon">
              <img src={grill} alt="" />
            </div>
            <h2>Grill</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
        </div>

        <div className="service-3">
          <div className="burger">
            <div className="icon">
              <img src={burger} alt="" />
            </div>
            <h2>Burger</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
          <div className="snack">
            <div className="icon">
              <img src={snack} alt="" />
            </div>
            <h2>Snack</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
        </div>
      </div>

      <div className="menu-heading">
        <div className="menu-intro">
          <h3 className="animated-menu"> OUR MENU</h3>
          <h1 className="animated-menu1">Discover our menu chart</h1>
          <h4>Most popular picks</h4>
        </div>
        <div className="side-text">
          <p>
            Through True Rich Attended does no end it his mother since
            favourable real had half every him packages enquire we up ecstatic..
            Through True Rich Attended does no end it his mother
          </p>
        </div>
      </div>

      <div className="menu">
        {Object.keys(menu)
          .slice(0, 6)
          .map((key) => (
            <div key={key}>
              <div className="menu-item">
                <motion.span
                  initial={{
                    opacity: 0,
                    y: 100,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      delayChildren: 1,
                      delay: 1,
                      duration: 1,
                      type: "tween",
                    },
                  }}
                  className="card"
                >
                  <img src={menu[key].image} alt={menu[key].product} />
                  <div className="description">
                    <h3>{menu[key].product}</h3>
                    <p>${menu[key].price}</p>
                  </div>
                </motion.span>
              </div>
            </div>
          ))}
      </div>

      <div className="view-menu">
        <Link className="button" to="/menu">
          View menu
        </Link>
      </div>
      <div className="inspirational-quote">
        <div className="quote">
          <motion.h1
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 1,
                type: "spring",
                mass: 2,
              },
            }}
          >
            "Edit this text to make it your own. To edit, simply click directly
            on the text to start adding your own words. You can move the text by
            dragging and dropping the text"
          </motion.h1>
          <div className="author-info">
            <div className="author-name">
              <motion.h3
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1,
                    duration: 1,
                    type: "tween",
                  },
                }}
                className=""
              >
                Joheny Andro
              </motion.h3>
              <motion.h4
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 1,
                    duration: 1,
                    type: "tween",
                  },
                }}
                className=" info"
              >
                Bhubaneswar, Odisha
              </motion.h4>
            </div>
            <div className="profile">
              <img src={snack} alt="profile-img" />
            </div>
          </div>
        </div>
        <div className="inspirational-image">
          <motion.img
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1.5,
                duration: 1,
                type: "spring",
                mass: 2,
                stiffness: 150,
              },
            }}
            src={coffemaker}
            alt="coffemaker"
          />
        </div>
      </div>

      <div className="blog">
        <div className="intro-text">
          <motion.h1
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 1,
                delay: 0.2,
                duration: 1,
                type: "tween",
              },
            }}
          >
            Read Our Latest Blog
          </motion.h1>
        </div>
        <div className="blogs">
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 1,
                delay: 1,
                duration: 0.5,
                type: "tween",
              },
            }}
            className="cards"
          >
            <div>
              <span>
                <div className=" blog-description">
                  <h4 className="blog-date">21 Jun 2021</h4>
                  <h3 className="blog-title">
                    Extra Thick Homemade Pizza Sauce
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page.
                  </p>
                </div>
                <img src={beans} alt="" />
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 1,
                delay: 1.5,
                duration: 1,
                type: "tween",
              },
            }}
            className="cards"
          >
            <div>
              <span>
                <div className=" blog-description">
                  <h4 className="blog-date">21 Jun 2021</h4>
                  <h3 className="blog-title">
                    The Best Way to Store Fresh Herbs
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page.
                  </p>
                </div>
                <img src={ham} alt="" />
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 1,
                delay: 2,
                duration: 1.5,
                type: "tween",
              },
            }}
            className="cards"
          >
            <div>
              <span>
                <div className=" blog-description">
                  <h4 className="blog-date">21 Jun 2021</h4>
                  <h3 className="blog-title">
                    5 ways to prepare <br />
                    porridge
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page.
                  </p>
                </div>
                <img src={bread} alt="" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>
      <Map />
      <Footer />
      {/* <Ourstory/> */}
      {/* <Aboutpage /> */}
      {/* <Menu/> */}
      {/* <Blog/> */}
      {/* <Blogpage/> */}
      {/* <Contact/>  */}
      {/* <Routes> */}
    </div>
  );
}

export default Home;
