import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Gallery from "./components/gallery/Gallery";
import SocialLinks from "./components/socialLinks/SocialLinks";

function App() {
  return (
    <>
      <Header title={"Your photographs"} />
      <SocialLinks />
      <Gallery />
    </>
  );
}

export default App;
