// import React from 'react'
// import { Link } from 'react-router-dom'
// import './Navbar.css';

// export function Navbar() {
//   return (
//     <nav className='Navbar'>
//         <Link to = "/aliment"></Link>
//         <ul>
//             <li>
//                 <Link to="/aliment">Home</Link>
//             </li>
//             <li>
//                 <Link to="/aliment/recipes">Recipes</Link>
//             </li>
//             <li>
//                 <Link to="/aliment/about">About</Link>
//             </li>
//             <li>
//                 <Link  to="/aliment/contact">Contact</Link>
//             </li>
//         </ul>
//     </nav>
//   )
// }

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../aliment logo.png';

export function Navbar() {
  return (
    <nav className='Navbar'>
      <div className='logo'>
        <Link to="/aliment">
          <img src={logo} alt="Aliment Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/aliment">Home</Link>
        </li>
        <li>
          <Link to="/aliment/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/aliment/about">About Us</Link>
        </li>
        <li>
          <Link to="/aliment/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
