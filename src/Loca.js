import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './loca.css'

import Map from './Map'
import { UseData } from './DataProvider'

const loca = () => {

  return (

    <div className='loca'>
      <div className="menu">
        <div className="top">
          <Link to='/home'>   <div className="img"><img src="../asset/logo.png" alt="logo" /></div></Link>

          <div className="opt">
            <Link to='City' > <button  > CITIES</button></Link>  <Link to='Countr'><button>COUNTRIES</button></Link>
          </div>
          <div className="citdiv">

            <Outlet />

          </div>
        </div>
        <p className='copy'> Copyright 2023by WorldWise inc.</p>
      </div>
      <div className="map">
        <Map />
      </div>

    </div>
  )
}

export default loca