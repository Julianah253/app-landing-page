import React from 'react'
import "./navbar.css"
import './nav.js'
const Navbar = () => {
  return (
    <div>
      <div id="navbar">
        <div class="nav-logo">
          <img src="./images/logo.png"/>
        </div>
        <div class="nav-list">
          <ul>
            <li className="active"> HOME </li>
            <li> FEATURES </li>
            <li> ABOUT </li>
            <li> UI SS </li>
            <li> DOWNLOAD </li>
          </ul>
        </div>
      </div>

      <script src='nav.js'></script>
    </div>
  )
}

export default Navbar