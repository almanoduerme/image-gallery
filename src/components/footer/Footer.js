import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <a
        className="link"
        href="https://www.github.com/almanoduerme"
        target="blank"
      >
        <img
          src="https://img.icons8.com/color/48/000000/github.png"
          alt="twitter"
        />
      </a>
      <a
        className="link"
        href="https://www.linkedin.com/in/gomeznahuel/"
        target="blank"
      >
        <img
          src="https://img.icons8.com/color/48/000000/linkedin.png"
          alt="instagram"
        />
      </a>
    </footer>
  );
};

export default Footer;
