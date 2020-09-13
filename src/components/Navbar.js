import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.scss';

const Navbar = () =>
  <nav className="navbar-custom">
    <ul className="topics">
      { window.location.pathname !== "/" && 
        <li>
          <NavLink to="/" className="name">
            <img width={32} height={32} src={`${process.env.PUBLIC_URL}/logo.png`} alt="The letters JP inside of a blue circle."/>
            </NavLink>
        </li>
      }
      {/* <li>
        <NavLink to='/about'>About</NavLink>
      </li> */}
      <li className="push">
        <NavLink to='/projects'>Projects</NavLink>
      </li>
    </ul>
  </nav>

export default Navbar;