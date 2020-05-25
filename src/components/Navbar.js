import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.scss';

const Navbar = () =>
  <nav class="navbar">
    { window.location.pathname !== "/" && <NavLink to="/" class="name">John Philip</NavLink> }
    <ul className="topics inline">
      <li className='inline'>
        <NavLink to='/about'>About</NavLink>
      </li>
      <li className='inline'>
        <NavLink to='/projects'>Projects</NavLink>
      </li>
    </ul>
  </nav>

export default Navbar;