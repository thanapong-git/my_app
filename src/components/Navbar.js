import React from 'react';
import './App.css';

const Navbar = ({ setPage }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><button onClick={() => setPage('home')}>หน้าหลัก</button></li>
        <li><button onClick={() => setPage('about')}>เกี่ยวกับเรา</button></li>
        <li><button onClick={() => setPage('courses')}>หลักสูตร</button></li>
        <li><button onClick={() => setPage('contact')}>ติดต่อเรา</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
