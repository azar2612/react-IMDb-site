import React from "react";
import "./Slider.css";

const Slider = () => (
  <div className="Slider">
    <SliderSec />
  </div>
);

const SliderSec = () => (
  <div className="Slider-sec">
    <SliderHeader />
    <SliderContainer />
    <SliderFooter />
  </div>
);

const SliderHeader = () => (
  <div className="Slider-header">
    <h2>BORN TODAY</h2>
  </div>
);

const SliderContainer = () => (
  <div className="Slider-container">
    <div className="Slide1">
      <img src="" alt="k" />
      <h2>NATALIA TENA</h2>
      <p>42</p>
    </div>
    <div className="Slide2">
      <img src="" alt="k" />
      <h2>NATALIA TENA</h2>
      <p>42</p>
    </div>
    <div className="Slide3">
      <img src="" alt="k" />
      <h2>NATALIA TENA</h2>
      <p>42</p>
    </div>
    <div className="Slide4">
      <img src="" alt="k" />
      <h2>NATALIA TENA</h2>
      <p>42</p>
    </div>
    <div className="Slide5">
      <img src="" alt="k" />
      <h2>NATALIA TENA</h2>
      <p>42</p>
    </div>
    <div className="Slide6">
      <img src="" alt="k" />
      <h2>NATALIA TENA</h2>
      <p>42</p>
    </div>
    <div className="Slide7">
      <img src="" alt="k" />
      <h2>NATALIA TENA</h2>
      <p>42</p>
    </div>
    <div className="Slide8">
      <img src="" alt="k" />
      <h2>NATALIA TENA</h2>
      <p>42</p>
    </div>
    <div className="Slide9">
      <img src="" alt="k" />
      <h2>NATALIA TENA</h2>
      <p>42</p>
    </div>
  </div>
);
const SliderFooter = () => (
  <div className="Slider-footer">
    <h2>SEE MORE</h2>
  </div>
);

export default Slider;
