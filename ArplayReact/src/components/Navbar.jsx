import React from 'react';
import { Link } from 'react-router-dom';




function Navbar() {
  return (
    <nav className='navbar'>
      <h1 style={styles.logo}>Kodigo Music</h1>
      <ul style={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1c1c1c',
    padding: '1rem',
  },
  logo: {
    color: 'white',
    fontSize: '1.5rem',
  },
  navLinks: {
    display: 'flex',
    gap: '1rem',
    listStyleType: 'none',
  }
};

export default Navbar;