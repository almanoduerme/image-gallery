import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Gallery from "./components/gallery/Gallery";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header title={"Your photographs"} />
      <Footer />
      <Gallery />
    </>
  );
}

export default App;
