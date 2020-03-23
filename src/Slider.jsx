import React from "react";
import "./Slider.css";
import ImgA from "./Slider_Img/14.jpg";
import ImgB from "./Slider_Img/15.jpg";
import ImgC from "./Slider_Img/16.jpg";
import ImgD from "./Slider_Img/17.jpg";
import ImgE from "./Slider_Img/18.jpg";
import ImgF from "./Slider_Img/19.jpg";
import ImgG from "./Slider_Img/20.jpg";

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
      <i class="fas fa-chevron-left"></i>
    </div>
    <div className="Slide2">
      <img src={ImgA} alt="k" width="114" height="200" />
      <div>
        <h2>NATALIA TENA</h2>
        <p>34</p>
      </div>
    </div>
    <div className="Slide3">
      <img src={ImgB} alt="k" width="114" height="200" />
      <h2>TONI COLLETE</h2>
      <p>42</p>
    </div>
    <div className="Slide4">
      <img src={ImgC} alt="k" width="114" height="200" />
      <h2>AISWARYA RAI</h2>
      <p>29</p>
    </div>
    <div className="Slide5">
      <img src={ImgD} alt="k" width="114" height="200" />
      <h2>PENN BADLEY</h2>
      <p>22</p>
    </div>
    <div className="Slide6">
      <img src={ImgE} alt="k" width="114" height="200" />
      <h2>JENNY</h2>
      <p>43</p>
    </div>
    <div className="Slide7">
      <img src={ImgF} alt="k" width="114" height="200" />
      <h2>CHAD LINBERG</h2>
      <p>22</p>
    </div>
    <div className="Slide8">
      <img src={ImgG} alt="k" width="114" height="200" />
      <h2>LOGAN</h2>
      <p>32</p>
    </div>
    <div className="Slide9">
      <i class="fas fa-chevron-right"></i>
    </div>
  </div>
);
const SliderFooter = () => (
  <div className="Slider-footer">
    <h2>SEE MORE</h2>
  </div>
);

export default Slider;
