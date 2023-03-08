import React from "react";
import menu from "../menu.json";
import "../App.scss";
import Map from "../components/map";
import Footer from "../components/footer";

const Menu = () => {
  return (
    <>
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
      </div>
      <Map/>
      <Footer/>
    </>
  );
};

export default Menu;
