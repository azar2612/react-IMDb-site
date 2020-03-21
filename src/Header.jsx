import React from "react";
import "./Header.css";

const Header = () => (
  <div className="Header">
    <Logo />
    <Menu />
    <Search />
    <Profile />
  </div>
);

const Logo = () => (
  <div className="Logo">
    <h2>IMDb</h2>
  </div>
);

const Menu = () => (
  <div className="Menu">
    <ul>
      <li>HOME</li>
      <li>TV SERIES</li>
      <li>NEWS</li>
      <li>PHOTOS</li>
      <li>EVENTS</li>
      <li>TRAILERS</li>
    </ul>
  </div>
);

const Search = () => (
  <div className="Search">
    <input
      type="text"
      placeholder="Find Movies, TV shows, Celebrities and more..."
      name="search"
    />
    <div className="button">
      <button>All</button>
    </div>
    <button>
      <i class="fa fa-search"></i>
    </button>
  </div>
);

const Profile = () => (
  <div className="profile-block">
    <i class="far fa-user-circle"></i>
    <i class="far fa-user-circle"></i>
    <i class="far fa-user-circle"></i>
  </div>
);

export default Header;
