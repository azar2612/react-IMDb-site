import React from "react";
import "./Rating.css";

const Rating = () => (
  <div className="Rating">
    <RatingLeft />
    <RatingMiddle />
    <RatingRight />
  </div>
);

const RatingLeft = () => (
  <div className="Rating-left">
    <img src="" alt="r" />
  </div>
);

const RatingMiddle = () => (
  <div className="Rating-middle">
    <RatingMiddle1 />
    <RatingMiddle2 />
  </div>
);

const RatingMiddle1 = () => (
  <div className="Rating-middle1">
    <RatingMiddle3 />
    <RatingMiddle4 />
    <RatingMiddle5 />
    <RatingMiddle6 />
  </div>
);

const RatingMiddle3 = () => (
  <div className="Rating-middle3">
    <h2>MAD MAX: FURY ROAD (2015)</h2>
    <p>R 120MIN ACTION ADVENTURE SCIFI 15 MAY2016 (USA)</p>
  </div>
);

const RatingMiddle4 = () => (
  <div className="Rating-middle4">
    <h2>MAD MAX: FURY ROAD (2015)</h2>
    <p>R 120MIN ACTION ADVENTURE SCIFI 15 MAY2016 (USA)</p>
  </div>
);

const RatingMiddle5 = () => (
  <div className="Rating-middle5">
    <h2>MAD MAX: FURY ROAD (2015)</h2>
    <p>R 120MIN ACTION ADVENTURE SCIFI 15 MAY2016 (USA)</p>
  </div>
);

const RatingMiddle6 = () => (
  <div className="Rating-middle6">
    <h2>MAD MAX: FURY ROAD (2015)</h2>
    <p>R 120MIN ACTION ADVENTURE SCIFI 15 MAY2016 (USA)</p>
  </div>
);

const RatingMiddle2 = () => (
  <div className="Rating-middle2">
    <img src="" alt="m" />
  </div>
);

const RatingRight = () => (
  <div className="Rating-right">
    <img src="" alt="o" />
  </div>
);

export default Rating;
