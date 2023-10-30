import React from 'react';
import './countr.css';
import { UseData } from './DataProvider';
const Countr = () => {
  const { cities } = UseData()

  return (
    <div className='countries'>
      {cities.map((city) => <div className="cbg">
        <div className="c_card">
          <span className='h3' >{city.countryCode}</span>
          <span className='p'>{city.country}</span>
        </div>
      </div>
      )}
    </div>
  )
}

export default Countr