import React from "react";
import './header.css';

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <p>Thanks for everything</p>
    </header>
  );
};

export default Header;
