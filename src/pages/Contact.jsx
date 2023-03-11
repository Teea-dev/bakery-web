import React from "react";

import ContactImage1 from "../assets/images/Contact Image 1.png";
import ContactImage2 from "../assets/images/Contact Image 2.png";
import Map from "../components/map";
import Footer from "../components/footer";

import "../App.scss";
const Contact = () => {
  return (
    <>
      <div className="contact-us">
        <div className="contact-form">
          <div className="contact-form-text">
            <h1>Have a Question ? <br /> Get in Touch with us 👋</h1>
            <p>Fill up the Form and our team will get back to within 24 hrs</p>
            <form>
              <div className="info">
                <div className="form-group">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
        <div className="contact-image">
            <img src={ContactImage1} alt="ContactImage1" />

            <img src={ContactImage2} alt="ContactImage2" />
            </div>
      </div>
      <Map/>
        <Footer/>
    </>
  );
};

export default Contact;
