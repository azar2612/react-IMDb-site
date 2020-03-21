import React from "react";
import "./Movies.css";

const Movies = () => (
  <div className="Movies">
    <MoviesSec />
  </div>
);

const MoviesSec = () => (
  <div className="Movies-sec">
    <MoviesHeader />
    <MoviesContainer />
    <MoviesFooter />
  </div>
);

const MoviesHeader = () => (
  <div className="Movies-header">
    <h2>NOW PLAYING</h2>
  </div>
);

const MoviesContainer = () => (
  <div className="Movies-container">
    <div className="Img1">
      <img src="" alt="k" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img2">
      <img src="" alt="k" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img3">
      <img src="" alt="k" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img4">
      <img src="" alt="k" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img5">
      <img src="" alt="k" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img6">
      <img src="" alt="k" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img7">
      <img src="" alt="k" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img8">
      <img src="" alt="k" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img9">
      <img src="" alt="k" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img10">
      <img src="" alt="k" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
  </div>
);
const MoviesFooter = () => (
  <div className="Movies-footer">
    <h2>SEE MORE</h2>
  </div>
);

export default Movies;
