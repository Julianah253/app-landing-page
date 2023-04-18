import React from 'react'
import "./navbar.css"
const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div class="nav-logo">
          <img src="./images/logo.png"/>
        </div>
        <div class="nav-list">
          <ul>
            <li> HOME </li>
            <li> FEATURES </li>
            <li> ABOUT </li>
            <li> UI SS </li>
            <li> DOWNLOAD </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar