import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Navbar.css"




function Navbar() {
  return (
    <nav className='navbar'>
      <h1 className='StyleLogo'>Kodigo Music</h1>
      <ul className='NavLinks'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}



export default Navbar;