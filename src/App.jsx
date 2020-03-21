import React from "react";
import "./App.css";
import "./Header";
import Header from "./Header";
import Movies from "./Movies";
import Slider from "./Slider";
import Picks from "./Picks";
import Footer from "./Footer";

const App = () => (
  <div className="IMDB-SITE">
    <Header />
    <Movies />
    <Slider />
    <Picks />
    <Footer />
  </div>
);
export default App;
