import React from "react";
import Hero from "./assets/images/Header.jpg";
import About from "./assets/images/about1.png";
import About2 from "./assets/images/about2.jpg";
import cake from "./assets/images/cake.svg";
import cocktail from "./assets/images/cocktail.svg";
import coffe from "./assets/images/coffe.svg";
import grill from "./assets/images/grill.svg";
import burger from "./assets/images/burger.svg";
import snack from "./assets/images/snack.svg";
import latte from "./assets/images/latte.jpg";
import cupcake from "./assets/images/cupcake.jpg";
import bigburger from "./assets/images/kingsize.jpg";
import fries from "./assets/images/dip.jpg";
import sandwich from "./assets/images/sandwich.jpg";
import ramen from "./assets/images/ramen.jpg";
import coffemaker from "./assets/images/coffeMaker.jpg";
import beans from "./assets/images/coffebeans.jpg";
import ham from "./assets/images/ham.jpg";
import bread from "./assets/images/bread.jpg";
import "./App.scss";

function App() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text">
          <h1>We serve high quality foods of all kinds.</h1>
          <p>
            Our food is made with fresh ingredients and we have a great variety
            of dishes
          </p>
          <button>View menu</button>

          <h3>Opening Times</h3>
          <p>Sunday - Saturday | 9am - 11pm</p>
          <h3> Location</h3>
          <p> Master Canteen, BBSR, Odisha 752054</p>
          <h3>Call Us</h3>
          <p> +91 1234567890</p>
        </div>
        <div className="hero-image">
          <img src={Hero} alt="hero" />
        </div>
      </div>
      <div className="about-us">
        <div className="item-1">
          <h3 className="about">KNOW MORE ABOUT US</h3>
          <h1>We source sustainable & line caught Foods</h1>
        </div>
        <div className="item">
          <h3>10+ People</h3>
          <p>
            We are small team
            <br />
            <br />
            Through True Rich Attended does no end it his mother since
            favourable.
          </p>
          <button>View menu</button>
        </div>
        <div className="item">
          <h3>2014</h3>
          <p>
            We are from
            <br />
            <br />
            Through True Rich Attended does no end it his mother since
            favourable.
          </p>
        </div>
        <div className="item">
          <h3>200K</h3>
          <p>
            We served
            <br />
            <br />
            Through True Rich Attended does no end it his mother since
            favourable.
          </p>
        </div>

        <div className="item-5">
          <img src={About} alt="know more image 1" />
        </div>
        <div className="item-6">
          <img src={About2} alt="know more image 2" />
        </div>
      </div>

      <div className="serve">
        <div className="serve-1">
          <h3 className="about-1">WHAT WE ARE SERVING</h3>
          <h1>We all have to eat, so why not do it beautifully.</h1>
        </div>
        <p>
          Through True Rich Attended does no end it his mother since favourable
          real had half every him case in packages enquire we up ecstatic..
          Through True Rich Attended does no end it his mother
        </p>
      </div>
      <div className="service">
        <div className="service-1">
          <div className="cake">
            <img src={cake} alt="" />
            <h2>Quafe Cake</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
          <div className="cocktail">
            <img src={cocktail} alt="" />
            <h2>Cocktails</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
        </div>

        <div className="service-2">
          <div className="coffe">
            <img src={coffe} alt="" />
            <h2>Coffe</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
          <div className="grill">
            <img src={grill} alt="" />
            <h2>Grill</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
        </div>

        <div className="service-3">
          <div className="burger">
            <img src={burger} alt="" />
            <h2>Burger</h2>
            <p>
              Through True Rich Attended does no end it his mother since
              favourable real had half every him
            </p>
          </div>
          <div className="snack">
            <img src={snack} alt="" />
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
          <h3> OUR MENU</h3>
          <h1>
            Discover our menu <br /> chart
          </h1>
          <h4>Most popular picks</h4>
        </div>
        <div className="side-text">
          <p>
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.. Through True Rich Attended does no end it his mother
          </p>
        </div>
      </div>
      <div className="menu">
        <div className="menu-item1">
          <span className="card">
            <img src={latte} alt="" />
            <div className="description">
              <h3>Drp Coffe</h3>
              <p>$08.85</p>
            </div>
          </span>
        </div>
        <div className="menu-item-2">
          <span className="card">
            <img src={cupcake} alt="" />
            <div className="description">
              <h3>Choco Cupcake </h3>
              <p>$4.85</p>
            </div>
          </span>
        </div>
        <div className="menu-item3">
          <span className="card">
            <img src={bigburger} alt="" />
            <div className="description">
              <h3>Chicken burger</h3>
              <p>$8.85</p>
            </div>
          </span>
        </div>
        <div className="menu-item-4">
          <span className="card">
            <img src={fries} alt="" />
            <div className="description">
              <h3>French fries</h3>
              <p>$7.85</p>
            </div>
          </span>
        </div>
        <div className="menu-item-5">
          <span className="card">
            <img src={sandwich} alt="" />
            <div className="description">
              <h3>Sandwitch</h3>
              <p>$3.97</p>
            </div>
          </span>
        </div>
        <div className="menu-item-6">
          <span className="card">
            <img src={ramen} alt="" />
            <div className="description">
              <h3>Chinese soup</h3>
              <p>$8.85</p>
            </div>
          </span>
        </div>
      </div>
      <div className="view-menu">
        <button>View menu</button>
      </div>
      <div className="inspirational-quote">
        <div className="quote">
          <h1>
            "Edit this text to make it your own. To edit, simply click directly
            on the text to start adding your own words. You can move the text by
            dragging and dropping the text"
          </h1>
          <div className="author-info">
            <div className="author-name">
              <h3>Joheny Andro</h3>
              <h4 className="info">Bhubaneswar, Odisha</h4>
            </div>
            <div className="profile">
              <img src={snack} alt="profile-img" />
            </div>
          </div>
        </div>
        <div className="inspirational-image">
          <img src={coffemaker} alt="coffemaker" />
        </div>
      </div>

      <div className="blog">
        <div className="intro-text">
          <h1>Read Our Latest Blog</h1>
        </div>
        <div className="blogs">
          <div className="cards">
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
          </div>
          <div className="cards">
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
          </div>
          <div className="cards">
          <div>
              <span>
                <div className=" blog-description">
                  <h4 className="blog-date">21 Jun 2021</h4>
                  <h3 className="blog-title">
                  5 ways to prepare  <br />
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
