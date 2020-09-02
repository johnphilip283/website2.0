import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.scss';

const Navbar = () =>
  <nav class="navbar-custom">
    <ul className="topics">
      { window.location.pathname !== "/" && <li><NavLink to="/" class="name">John Philip</NavLink></li>}
      <li class="push">
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/projects'>Projects</NavLink>
      </li>
    </ul>
  </nav>

export default Navbar;