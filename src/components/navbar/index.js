import React from 'react'

import logo from '../../assets/images/logo.png'
import './navbar.scss'

const Navbar = () => (
  <div className="navbar-wrapper">
    <div className="navbar-content ui container">
      <div className="navbar-text">
        <h1 className="ui header navbar-title">Tijd voor... FEEST</h1>
        <h3 className="ui header navbar-subtitle">In naam van iedereen die jij hbt geholpen</h3>
      </div>
        <img src={ logo } alt="KiK logo"/>
    </div>
  </div>

)

export default Navbar
