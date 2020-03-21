import React from "react";
import "./Picks.css";

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
      <img src="" alt="k" />
    </div>
    <div className="Picks2">
      <img src="" alt="k" />
    </div>
    <div className="Picks3">
      <img src="" alt="k" />
    </div>
    <div className="Picks4">
      <img src="" alt="k" />
    </div>
    <div className="Picks5">
      <img src="" alt="k" />
    </div>
    <div className="Picks6">
      <img src="" alt="k" />
    </div>
  </div>
);
const PicksFooter = () => (
  <div className="Picks-footer">
    <h2>VISIT THE IMDB PICKS SECTION</h2>
  </div>
);

export default Picks;
