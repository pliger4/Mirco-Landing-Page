import React from 'react';
import '../App.css';
import './Hero.css'

function Hero() {
  return (
    <div className='hero-container'>
    <div className='label-container'>
      <div className='options'>
      <h1>Chosen</h1>
      <h2>Options:</h2>
      <ul>
      <i className='fas fa-cloud round-icon'></i>
      </ul>
      <ul>
      <i className='fas fa-temperature-high round-icon'></i>
      </ul>
      <ul>
      <i className='fas fa-thermometer round-icon'></i>
      </ul>
      <ul>
      <i className='fas fa-cloud round-icon'></i>
      </ul>
      <ul>
      <i className='fas fa-temperature-high round-icon'></i>
      </ul>
      <ul>
      <i className='fas fa-temperature-low round-icon'></i>
      </ul>
      <ul>
      <i className='fas fa-thermometer round-icon'></i>
      </ul>
      <ul>
      <i className='fas fa-cloud round-icon'></i>
      </ul>
      <ul>
      <i className='fas fa-thermometer round-icon'></i>
      </ul>
      <ul>
      <i className='fas fa-cloud round-icon'></i>
      </ul>
      </div>
      <div className='white'>
      <h1>White Label</h1>
      <h2>W-394900 XP</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p> 
      <p>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</p>
      <p>nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in</p>
      <p>reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p> 
      <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
      <p>deserunt mollit anim id est laborum.</p>
      <span>LIVE VIEW</span>
      </div>
      <div className='Button'>
      <button className='btn'>Order Now</button>
      </div>
    </div>
    </div>
  )
}

export default Hero
