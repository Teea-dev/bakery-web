import React from "react";
import "../App.scss";
import Aboutus from "../assets/images/About.png";
import About2 from "../assets/images/About2.png";
import Footer from "../components/footer";
import Map from "../components/map";
import Navbar from "../components/Nav";

const About = () => {
  return (
    <>
    <Navbar/>
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
          <img src={Aboutus} alt="know more image 1" />
        </div>
        <div className="item-6">
          <img src={About2} alt="know more image 2" />
        </div>
      </div>
      <div className="history">
        <div className="banner">
          <h1>
            One of the best <br /> Cafes in
            <span className="newyork">New York</span>{" "}
          </h1>
          <p>
            Through True Rich Attended does no end it his mother <br /> since
            favourable real had half every him case in <br /> packages enquire
            we up ecstatic.. Through True Rich <br /> Attended does no end it
            his mother
          </p>
        </div>
        <div className="main-history">
          <h2 className="ourhistory"> Our History </h2>
          <div className="years">
            <span>
              <h2>1998</h2>
              <h3>Milestone One</h3>
              <p>
                {" "}
                Through True Rich Attended does no end it his mother since
                favourable
              </p>
            </span>
            <span>
              <h2>2005</h2>
              <h3>Milestone Two</h3>
              <p>
                {" "}
                Through True Rich Attended does no end it his mother since
                favourable
              </p>
            </span>
            <span>
              <h2>2012</h2>
              <h3>Milestone Three</h3>
              <p>
                {" "}
                Through True Rich Attended does no end it his mother since
                favourable
              </p>
            </span>
            <span>
              <h2>2021</h2>
              <h3>Milestone Four</h3>
              <p>
                {" "}
                Through True Rich Attended does no end it his mother since
                favourable
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="values">
        <div className="core-values">
          <h1>Things Our Company <br /> stands for</h1>
        </div>
        <div className="list-of-values">
          <h2>
            Edit this text to make it your own. To edit, simply click directly.
          </h2>
          <p>
            Writing UX copies can be a little frustrating and confusing, and
            sometimes we are unsure about how to get the right word. To crack
            the code for the UX copies, we at Zeta Design wanted to build a
            Figma plugin for the larger design community. The plugin is called
            the Ghost UXWriter and has a set of UX copies cataloged and
            categorized with a voice and tone variation ranging from plain,
            casual to playful. The intention to build this Figma plugin
            originated from our Medium blog post, ‘Designing voice and tone for
            error messages.
          </p>
        </div>
      </div>
        <Map/>
        <Footer/>
    </>
  );
};

export default About;
