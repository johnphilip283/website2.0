import React from 'react';
import '../styles/Navbar.scss';

const Navbar = () => 
  <nav class="navbar">
    <a href="/" class="name">John Philip</a>
    <ul className="topics inline">
      <li className='inline'>
        <a href="/about">About</a>
      </li>
      <li className='inline'>
        <a href="/projects">Projects</a>
      </li>
    </ul>
  </nav>

export default Navbar;