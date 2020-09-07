import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.scss';

const Navbar = () =>
  <nav class="navbar-custom">
    <ul className="topics">
      { window.location.pathname !== "/" && 
        <li>
          <NavLink to="/" class="name">
            <img width={32} height={32} src={`${process.env.PUBLIC_URL}/logo.png`}/>
            </NavLink>
        </li>
      }
      <li class="push">
        <NavLink to='/about'>About</NavLink>
      </li>
      <li>
        <NavLink to='/projects'>Projects</NavLink>
      </li>
    </ul>
  </nav>

export default Navbar;