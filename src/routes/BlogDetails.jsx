import React from "react";
import profileImage from "../assets/images/profileImage.png";
import BlogImage from "../assets/images/Blog Image.png";
import "../App.scss";
import Map from "../components/map";
import Footer from "../components/footer";
import Navbar from "../components/Nav";
const BlogDetails = () => {
  return (
    <>
    <Navbar/>
      <div className="blog-page">
        <div className="profile-heading">
          <div className="image">
            <img src={profileImage} alt="" />
          </div>
          <div className="profile">
            <div className="profile-info">
              <h3>Andrew Johnson</h3>
              <p>Posted on 27th January 2021</p>
            </div>
          </div>
        </div>
        <div className="blog-content">
          <h1>How to store Tomatoes (and Whether to Refrigerate Them)</h1>
          <img src={BlogImage} alt="" />
          <div className="paragraph">
            <h2>
              Edit this text to make it your own. To edit, simply click directly
              on the text.
            </h2>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
            </p>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
            </p>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
            </p>
            <p>
              Writing UX copies can be a little frustrating and confusing, and
              sometimes we are unsure about how to get the right word. To crack
              the code for the UX copies, we at Zeta Design wanted to build a
              Figma plugin for the larger design community. The plugin is called
              the Ghost UXWriter and has a set of UX copies cataloged and
              categorized with a voice and tone variation ranging from plain,
              casual to playful. The intention to build this Figma plugin
              originated from our Medium blog post, ‘Designing voice and tone
              for error messages.
            </p>
          </div>
        </div>
      </div>
      <Map />
      <Footer />
    </>
  );
};

export default BlogDetails;
