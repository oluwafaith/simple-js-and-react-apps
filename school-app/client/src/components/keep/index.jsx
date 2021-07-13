import React from "react";
import { Link } from "react-router-dom";
// import { TopPanel, NavContainer } from "./styles";
import NavDropDown from "./NavDropDown";
import Hamburger from "./Hamburger";
import "./styles.css";

const Header = () => {
  return (
    <>
          <div className="topPanel">
              
              <div className="navContainer">
                  
          <div className="navLogo">
            <Hamburger />
            <span>Kindred Hair</span>
              </div>
                  
          <div className="navDetails">
            <Link to="/dashboard">Products</Link>
            <Link to="/">Journal</Link>
            <Link to="/">Community</Link>
                  </div>
                  
          <div className="navRight">
            <NavDropDown />
            <div className="cart">
              <img src="/images/shoppingcart.png" alt="cart"/>
              <span>0</span>
            </div>
                  </div>
                  
              </div>
              
      </div>
    </>
  );
};
export default Header;
