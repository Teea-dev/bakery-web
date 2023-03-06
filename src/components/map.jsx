import React from "react";
import map from "../assets/images/Map.jpg";
const Map = () => {
  return (
    <>
      <div className="contact-map">
        <div className="contact">
          <span className="work-hours">
            <h2>Working Hours</h2>
            <p>Sunday to Saturday 09:00 AM to 11:00 PM</p>
          </span>
          <span className="location">
            <h2>Location</h2>
            <p>
              Street - 127, New York,
              <br /> United States
              <br /> 546544
            </p>
          </span>
          <span className="contact">
            <h2>Contact Us</h2>
            <p>
            +123456789
             <br /> hey@yourdomain.com
            </p>
          </span>
        </div>
        <div className="map">
          <img src={map} alt="map" />
        </div>
      </div>
    </>
  );
};

export default Map;
