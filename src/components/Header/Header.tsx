import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.css'

function Header() {

  const className = 'header'

  const navLinkClass = (obj: { isActive: boolean, isPending: boolean }): string => {
    const {isActive} = obj;
    return isActive ? 'nav-link nav-link_active' : 'nav-link';
  }

  return (
    <div className={ className }>
      <ul className={ `${ className }__nav-bar` }>
        <li className={ `${ className }__nav-item` }><NavLink className={ navLinkClass } to={ '/' }>Главная</NavLink></li>
        <li className={ `${ className }__nav-item` }><NavLink className={ navLinkClass } to={ '/history/all' }>История</NavLink></li>
        <li className={ `${ className }__nav-item` }><NavLink className={ navLinkClass } to={ '/history/add' }>История добавлений</NavLink></li>
        <li className={ `${ className }__nav-item` }><NavLink className={ navLinkClass } to={ '/history/delete' }>История удалений</NavLink></li>
      </ul>
    </div>
  );
}

export default Header;
