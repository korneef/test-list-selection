import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {

  const className = 'header'
  return (
    <div className={className}>
      <ul>
        <li><NavLink to={'/'}>Главная</NavLink></li>
        <li><NavLink to={'/history'}>История</NavLink></li>
      </ul>
    </div>
  );
}

export default Header;
