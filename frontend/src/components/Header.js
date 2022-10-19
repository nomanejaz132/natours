import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Icons';
import whiteLogo from '../assets/images/logo-white.png';
import userLogo from '../assets/images/users/default.jpg';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav nav--tours">
        <Link to="/" className="nav__el">
          All tours
        </Link>
        <form className="nav__search">
          <button className="nav__search-btn">
            <Search />
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
      </nav>
      <div className="header__logo">
        <Link to="/">
          <img src={whiteLogo} alt="Natours logo" />
        </Link>
      </div>
      <nav className="nav nav--user">
        {/* <a href="#" className="nav__el">
          My bookings
        </a>
        <a href="#" className="nav__el">
          <img src={userLogo} alt="User photo" className="nav__user-img" />
          <span>Jonas</span>
        </a> */}

        <Link to="/login" className="nav__el">
          Log in
        </Link>
        <Link to="/signup" className="nav__el nav__el--cta">
          Sign up
        </Link>
      </nav>
    </header>
  );
};

export default Header;
