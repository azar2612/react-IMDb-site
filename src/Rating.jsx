import React from "react";
import "./Rating.css";
import ImgA from "./Rating_Img/04.jpg";
const Rating = () => (
  <div className="Rating">
    <RatingLeft />
    <RatingMiddle />
    <RatingRight />
  </div>
);

const RatingLeft = () => (
  <div className="Rating-left">
    <i class="fas fa-chevron-left"></i>
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
    <p>
      R{" "}
      <span>
        {" "}
        <i class="fas fa-circle"></i>
      </span>
      120 MIN{" "}
      <span>
        {" "}
        <i class="fas fa-circle"></i>
      </span>
      ACTION ADVENTURE SCIFI 15 MAY2016 (USA)
    </p>
  </div>
);

const RatingMiddle4 = () => (
  <div className="Rating-middle4">
    <div className="RateA">
      <i class="fas fa-circle-notch"></i>
      <p>8.7</p>
    </div>
    <div className="RateB">
      <p>
        Your rating:
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        6/10
      </p>

      <p>
        Ratings: <span>8.7/</span>
        <small>10</small> from <span> 137,182 users</span> Metascore:{" "}
        <span>89/100</span>
      </p>
      <p>
        Reviews:{" "}
        <span>
          697 user <i class="fas fa-circle"></i> 502 critic{" "}
          <i class="fas fa-circle"></i> 46{" "}
        </span>
        from <span>Metacritic.com</span>
      </p>
    </div>
  </div>
);

const RatingMiddle5 = () => (
  <div className="Rating-middle5">
    <h2>SUMMARY</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
      laboriosam, Ducimus culpa ratione ullam quis ipsam!
    </p>
    <p>
      Director: george miller{" "}
      <span>
        {" "}
        <i class="fas fa-circle"></i>
      </span>
      Writers: George miller,Brendan McCarthy,Nick Lathouris{" "}
      <span>
        {" "}
        <i class="fas fa-circle"></i>
      </span>{" "}
      Stars : <i class="far fa-user-circle"></i>{" "}
      <i class="far fa-user-circle"></i> <i class="far fa-user-circle"></i>{" "}
      <i class="far fa-user-circle"></i> <i class="far fa-user-circle"></i>{" "}
      <i class="far fa-user-circle"></i>
    </p>
  </div>
);

const RatingMiddle6 = () => (
  <div className="Rating-middle6">
    <button>
      <i class="fas fa-plus"></i>
      <p> WATCH LIST</p>
      <i class="fas fa-sort-down"></i>
    </button>
    <button>
      <i class="fas fa-play"></i>
      <p>WATCH LATER</p>
    </button>
  </div>
);

const RatingMiddle2 = () => (
  <div className="Rating-middle2">
    <div className="img">
      <img src={ImgA} alt="k" width="185" height="400" />
    </div>
  </div>
);

const RatingRight = () => (
  <div className="Rating-right">
    <i class="fas fa-chevron-right"></i>
  </div>
);

export default Rating;
