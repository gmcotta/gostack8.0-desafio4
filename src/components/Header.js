import React, { Component } from "react";

import logo from "../assets/Shape.png";
import profile from "../assets/contact.png";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} />
        <div className="profile">
          <span>Meu perfil </span>
          <img src={profile} />
        </div>
      </div>
    );
  }
}

export default Header;
