import React from 'react';
import './home.css';
import Nav from "./nav"

import { Link, Outlet } from 'react-router-dom';
const home = () => {
  return (
    <>
        <Nav />

    <div className='home'>
      <h1>
        You travel the world.

      </h1>
      <h1>WorldWise keeps track of your advantures</h1>
      <p>A world map that tracks your footsteps into every city you can think of never forget your wonderful experiences and </p>
      <p>show your friends how you have wondered the world</p>

      <Link to="Login" > <div><button>START TRACKING NOW</button></div></Link>

      <Outlet />
    </div>
    </>
  )

}

export default home