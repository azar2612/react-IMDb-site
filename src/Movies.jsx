import React from "react";
import "./Movies.css";
import ImgA from "./Movies_Img/04.jpg";
import ImgB from "./Movies_Img/05.jpg";
import ImgC from "./Movies_Img/06.jpg";
import ImgD from "./Movies_Img/07.jpg";
import ImgE from "./Movies_Img/08.jpg";
import ImgF from "./Movies_Img/09.jpg";
import ImgG from "./Movies_Img/10.jpg";
import ImgH from "./Movies_Img/11.jpg";
import ImgI from "./Movies_Img/12.jpg";
import ImgJ from "./Movies_Img/13.jpg";

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
    <h2>
      NOW PLAYING{" "}
      <span>
        <i class="fas fa-circle"></i>
      </span>
      BOX OFFICE
    </h2>
  </div>
);

const MoviesContainer = () => (
  <div className="Movies-container">
    <div className="Img1">
      <img src={ImgA} alt="k" width="168" height="250" />
      <h2>FANTASTIC FOUR</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img2">
      <img src={ImgB} alt="k" width="168" height="250" />
      <h2>THE MAN FROM UNCLE</h2>
      <p>$ 28M</p>
    </div>
    <div className="Img3">
      <img src={ImgC} alt="k" width="168" height="250" />
      <h2>SHAWN THE SHEEP MOVIE</h2>
      <p>$ 35M</p>
    </div>
    <div className="Img4">
      <img src={ImgD} alt="k" width="168" height="250" />
      <h2>THE GIFT</h2>
      <p>$ 200</p>
    </div>
    <div className="Img5">
      <img src={ImgE} alt="k" width="168" height="250" />
      <h2>MISSION IMPOSSIBLE:5</h2>
      <p>$ 45M</p>
    </div>
    <div className="Img6">
      <img src={ImgF} alt="k" width="168" height="250" />
      <h2>HOTEL TRANSLYVIA</h2>
      <p>$ 17.7M</p>
    </div>
    <div className="Img7">
      <img src={ImgG} alt="k" width="168" height="250" />
      <h2>SICARO</h2>
      <p>$ 4.5M</p>
    </div>
    <div className="Img8">
      <img src={ImgH} alt="k" width="168" height="250" />
      <h2>THE MARTIAN</h2>
      <p>$ 85M</p>
    </div>
    <div className="Img9">
      <img src={ImgI} alt="k" width="168" height="250" />
      <h2>THE SCOTCH TRIALS</h2>
      <p>$ 25M</p>
    </div>
    <div className="Img10">
      <img src={ImgJ} alt="k" width="168" height="250" />
      <h2>EVEREST</h2>
      <p>$ 105M</p>
    </div>
  </div>
);
const MoviesFooter = () => (
  <div className="Movies-footer">
    <h2>SEE MORE</h2>
  </div>
);

export default Movies;
