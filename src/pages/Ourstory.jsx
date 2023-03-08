import React from "react";
import "../App.scss";
import Story1 from "../assets/images/image 1.png";
import Story2 from "../assets/images/image 2.png";
import Footer from "../components/footer";
import Map from "../components/map";
const Ourstory = () => {
  return (
    <>
    <div className="story-container">

    
      <div className="story-intro">
          <h1>OUR STORY</h1>
          <p>
            Through True Rich Attended does no end it his mother since
            favourable real had half every him case in packages enquire we up
            ecstatic.
          </p>
        <div className="story-heading">
          <div >
            <img className="image1" src={Story1} alt="" />
          </div>
          <div className="image2">
            <img src={Story2} alt="" />
          </div>
        </div>
      </div>

      <div className="main-story">
        <div className="tittle">
          <h2>One of the best cafes in  <span className="newyork">New York.</span> </h2>
        </div>

        <div className="story">
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
          <br />
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
        </div>  
        <Map/>
        <Footer/>
    </>
  );
};

export default Ourstory;
