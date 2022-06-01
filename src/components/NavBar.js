import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
  return (
    <div className='navbar'>
      <header>Let's Have A Toast</header>
      <div className='navbar__links'>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/recipes'>RECIPES</NavLink>
        <NavLink to='/random'>RANDOM</NavLink>
      </div>
    </div>
    
  );
}

export default NavBar;