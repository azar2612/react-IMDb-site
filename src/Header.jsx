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
    <div className="logo1">
      <h2>IMDb</h2>
    </div>
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
      <button>
        <p>All</p>
        <i class="fas fa-sort-down"></i>
      </button>
    </div>
    <div className="button1">
      <button>
        <i class="fa fa-search"></i>
      </button>
    </div>
  </div>
);

const Profile = () => (
  <div className="profile-block">
    <i class="far fa-user-circle"></i>
    <i class="fas fa-address-card"></i>
    <i class="fas fa-certificate"></i>
  </div>
);

export default Header;
