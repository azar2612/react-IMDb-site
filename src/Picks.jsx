import React from "react";
import "./Picks.css";
import Img1 from "./Picks_Images/21.jpg";
import Img2 from "./Picks_Images/22.jpg";
import Img3 from "./Picks_Images/23.jpg";
import Img4 from "./Picks_Images/24.jpg";
import Img5 from "./Picks_Images/25.jpg";
import Img6 from "./Picks_Images/G.jpg";

const Picks = () => (
  <div className="Picks">
    <PicksSec />
  </div>
);

const PicksSec = () => (
  <div className="Picks-sec">
    <PicksHeader />
    <PicksContainer />
    <PicksFooter />
  </div>
);

const PicksHeader = () => (
  <div className="Picks-header">
    <h2>IMDB PICKS : NOVEMBER</h2>
  </div>
);

const PicksContainer = () => (
  <div className="Picks-container">
    <div className="Picks1">
      <img src={Img1} alt="k" width="141" height="250" />
    </div>
    <div className="Picks2">
      <img src={Img2} alt="k" width="141" height="250" />
    </div>
    <div className="Picks3">
      <img src={Img3} alt="k" width="141" height="250" />
    </div>
    <div className="Picks4">
      <img src={Img4} alt="k" width="141" height="250" />
    </div>
    <div className="Picks5">
      <img src={Img5} alt="k" width="141" height="250" />
    </div>
    <div className="Picks6">
      <img src={Img6} alt="k" width="145" height="250" />
    </div>
  </div>
);
const PicksFooter = () => (
  <div className="Picks-footer">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque unde
      autem amet aperiam, accusantium tempore impedit, labore fugit dolorem
      facere provident quidem sapiente corrupti quis minima vel laudantium
      incidunt architecto!
    </p>
    <h2>VISIT THE IMDB PICKS SECTION</h2>
  </div>
);

export default Picks;
