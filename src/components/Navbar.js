import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
        <span className='nav-item'>
              <Link
                to='/'
                className='nav-links'
              >
                Constructor
              </Link>
            </span>
        <span className='nav-item'>
          <Link
            to='/Help'
            className='nav-links'
          >
            Help
          </Link>
        </span>  
        <span className='nav-item'>
              <Link
                to='/UsersPanels'
                className='nav-links'
              >
                User Panels
              </Link>
            </span>
        <span className='nav-item'>
              <Link
                to='/FAQ'
                className='nav-links'
              >
                FAQ
              </Link>
            </span>
        <span className='nav-item'>
              <Link
                to='/About'
                className='nav-links'
              >
                About
              </Link>
            </span>
        <span className='nav-item'>
              <Link
                to='/Blog'
                className='nav-links'
              >
                Blog
              </Link>
            </span>
            
            <Link to="/" className="navbar-logo">
            <i className='far fa-heart'></i>
            <i className='fas fa-grip-lines-vertical'></i>
            <i className='fas fa-search'></i>
          </Link>
        </div>
      </nav>
      <div className="chip-container">
          <h1 class="text" style={{color: "#fff", padding: 10}}>Chip</h1><h1 class="text1">Constructor</h1>
        </div>
      <div className="icons-container">
      <li>
        <i className="fas fa-arrow-left"></i>
      </li>
      <li>
      <text title="Cloud"><i className='fas fa-cloud circle-icon'></i><span>Cloud</span></text>
      </li>
      <li>
      <text title="Temperature"><i className='fas fa-temperature-high circle-icon'></i><span>Water Temp</span></text>
      </li>
      <li>
      <text title="Cloud Temp"><i className='fas fa-thermometer circle-icon'></i><span>Cloud Temp</span></text>
      </li>
      <li>
      <text title="Cloud"><i className='fas fa-cloud circle-icon'></i><span>Dust Temp</span></text>
      </li>
      <li>
      <text title="Temperature"><i className='fas fa-temperature-high circle-icon'></i><span>Temperature</span></text>
      </li>
      <li>
      <text title="Temperature"><i className='fas fa-thermometer-empty circle-icon'></i><span>Water Temp</span></text>
      </li>
      <li>
      <text title="Cloud Temp"><i className='fas fa-thermometer circle-icon'></i><span>Cloud Temp</span></text>
      </li>
      <li>
      <text title="Cloud"><i className='fas fa-cloud circle-icon'></i><span>Dust Temp</span></text>
      </li>
      <li>
      <text title="Cloud Temp"><i className='fas fa-thermometer circle-icon'></i><span>Cloud Temp</span></text>
      </li>
      <li>
      <text title="Cloud"><i className='fas fa-cloud circle-icon'></i><span>Dust Temp</span></a>
      </li>
      <li>
        <i className="fas fa-arrow-right"></i>
      </li>
      </div>
    </>
  )
}

export default Navbar
