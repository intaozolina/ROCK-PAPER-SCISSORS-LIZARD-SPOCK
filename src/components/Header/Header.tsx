import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => (
  <div>
    <nav className="header">
      <NavLink className="header__navigation" to="/">Home Page</NavLink>
      <NavLink className="header__navigation" to="/game">Play a Game</NavLink>
    </nav>
  </div>
);

export default Header;
