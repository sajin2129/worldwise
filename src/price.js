import React from 'react'
import "./pric.css";
import Nav from "./nav"


const pric = () => {
  return (
    <>
        <Nav />
    
    <div className='price'>
        <div className="con">
          <div>  <h1>simple pricing.</h1>
            <h1>Just $9/month.</h1></div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quis ab,
                 tenetur animi iure cumque, deserunt consequuntur nemo, dolor alias deleniti.
                 Deserunt, accusamus nesciunt at doloremque minus consectetur voluptatum sunt?</p>
        </div>
        <div className="imag">
            <img src="../asset/bu.jpg" alt="" />
        </div>
    </div>
    </>
  )
}

export default pric