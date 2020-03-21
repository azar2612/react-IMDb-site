import React from "react";
import "./App.css";
import "./Header";
import Header from "./Header";
import Movies from "./Movies";
import Slider from "./Slider";

const App = () => (
  <div className="IMDB-SITE">
    <Header />
    <Movies />
    <Slider />
  </div>
);
export default App;
