import React from "react";
import { NavLink  } from "react-router-dom";
import './header.component.scss'

const Header = () => {
  return (
        <nav className="header">
          <div className="options">
            <NavLink exact  className="option" activeClassName="active" to="/">Home</NavLink >
            <NavLink exact  className="option" activeClassName="active" to="/cv">CV</NavLink >
            {/* <NavLink exact  className="option" activeClassName="active" to="/contact">Contact</NavLink > */}
          </div>
        </nav>
  );
};

export default Header;
