import React from "react";
import woman from "../assets/images/woman.png";
import spoon from "../assets/images/spoon.png";
import couple from "../assets/images/couple.png";
import profileImage from "../assets/images/profileImage.png";
import articleimage1 from "../assets/images/articleimage1.png";
import articleimage2 from "../assets/images/articleimage2.png";
import articleimage3 from "../assets/images/articleimage3.png";
import articleimage4 from "../assets/images/articleimage4.png";
import Arrow from "../assets/images/Arrow.svg";
import Map from "../components/map";
import Footer from "../components/footer";
import "../App.scss";
const Blog = () => {
  return (
    <>
      <div className="blog-container">
        <div className="blog-intro">
          <h1>Featured Blogs</h1>
        </div>
        <div className="featured-blog">
          <div className="items-1">
            <div className="another-container">
              <h1>
                A guide to Thai <br /> Curry
              </h1>
              <div className="profile">
                <div className="profile-name">
                  <div className="profile-image">
                    <img src={profileImage} alt="" />
                  </div>
                  <div>
                    <span className="name">
                      {" "}
                      <h3>Andrew Johnson</h3>
                    </span>
                    <span className="date">
                      {" "}
                      <p>27th January 2021</p>{" "}
                    </span>
                  </div>
                </div>
                <div className="more">
                  <h3>Read More</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="items">
            <div className="blog-image">
              <img src={woman} alt="woman" />
            </div>
            <div className="text">
              <h3>You can move the text by dragging and dropping the text</h3>
              <p>
                Writing UX copies can be a little frustrating <br /> and
                confusing, and sometimes
              </p>
            </div>
          </div>
          <div className="items">
            <div className="blog-image">
              <img src={spoon} alt="spoon" />
            </div>
            <div className="text">
              <h3>You can move the text by dragging and dropping the text</h3>
              <p>
                Writing UX copies can be a little frustrating <br /> and
                confusing, and sometimes
              </p>
            </div>
          </div>
          <div className="items">
            <div className="blog-image">
              <img src={couple} alt="couple" />
            </div>
            <div className="text">
              <h3>You can move the text by dragging and dropping the text</h3>
              <p>
                Writing UX copies can be a little frustrating <br /> and
                confusing, and sometimes
              </p>
            </div>
          </div>
        </div>
        <div className="article">
          <h1>All Articles</h1>
          <div className="all-articles">
            <div className="articles">
              <div className="article-image">
                <img src={articleimage1} alt="" />
              </div>
              <div className="profile">
                <div className="profile-name">
                  <div className="profile-info">
                    <div className="profile-image">
                      <img src={profileImage} alt="" />
                    </div>
                    <div>
                      <div className="name">
                        {" "}
                        <h3>Andrew Johnson</h3>{" "}
                      </div>
                      <div className="date">
                        {" "}
                        <p>27th January 2021</p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="more">
                    <h2>A guide to Thai Curry</h2>
                    <h3>Read More <img src={Arrow} alt="" />  </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="articles">
              <div className="article-image">
                <img src={articleimage2} alt="" />
              </div>
              <div className="profile">
                <div className="profile-name">
                  <div className="profile-info">
                    <div className="profile-image">
                      <img src={profileImage} alt="" />
                    </div>
                    <div>
                      <div className="name">
                        {" "}
                        <h3>Andrew Johnson</h3>{" "}
                      </div>
                      <div className="date">
                        {" "}
                        <p>27th January 2021</p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="more">
                    <h2>The best guacamole recipe with only 4 ingredients</h2>
                    <h3>Read More <img src={Arrow} alt="" /> </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="articles">
              <div className="article-image">
                <img src={articleimage3} alt="" />
              </div>
              <div className="profile">
                <div className="profile-name">
                  <div className="profile-info">
                    <div className="profile-image">
                      <img src={profileImage} alt="" />
                    </div>
                    <div>
                      <div className="name">
                        {" "}
                        <h3>Andrew Johnson</h3>{" "}
                      </div>
                      <div className="date">
                        {" "}
                        <p>27th January 2021</p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="more">
                    <h2>How to store Tomatoes (and Whether to Refrigerate Them)</h2>
                    <h3>Read More  <img src={Arrow} alt="" /> </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="articles">
              <div className="article-image">
                <img src={articleimage4} alt="" />
              </div>
              <div className="profile">
                <div className="profile-name">
                  <div className="profile-info">
                    <div className="profile-image">
                      <img src={profileImage} alt="" />
                    </div>
                    <div>
                      <div className="name">
                        {" "}
                        <h3>Andrew Johnson</h3>{" "}
                      </div>
                      <div className="date">
                        {" "}
                        <p>27th January 2021</p>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="more">
                    <h2>The Absolute Best Way to Cook French Fries</h2>
                    <h3>Read More  <img src={Arrow} alt="" /> </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Map/>
      <Footer/>
    </>
  );
};

export default Blog;
