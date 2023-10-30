import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
const nav = () => {
  return (
    <div className='nav'>
      <Link to="/home" style={{textDecoration:"none"}}> <div className="img"><img src="../asset/logo.png" alt="logo" /></div></Link>
      <ul>
         <Link to="/pric" style={{textDecoration:"none"}}> <li>PRICING</li></Link>
         <Link to="/about" style={{textDecoration:"none"}}>  <li>PRODUCT</li></Link>
          <Link to="/Login" style={{textDecoration:"none"}}>  <li>LOGIN</li></Link>
        </ul>
        </div>
  )
}

export default nav
