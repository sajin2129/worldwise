import React from 'react'
import './cit.css'
import { Link } from 'react-router-dom'
import { UseData } from './DataProvider'

const City = () => {

    const { cities, Deletfun } = UseData();
    return (
        <div className='cit'>



            {cities.map((city) =>
                <div className="posi">
                    <Link to={`Visit/${city.id}`} style={{ textDecoration: "none", width: "90%" }}>
                        <div className="sideg" key={city.id}>
                            <div className="sel" >
                                <p>{city.countrycode}{city.cityname}</p>
                                <p className='clo'>
                                    ({city.dates})


                                </p>


                            </div>
                        </div>
                    </Link>
                    <span onClick={() => Deletfun(city.id)}>
                        &times;
                    </span>
                </div>
            )}





        </div>
    )
}

export default City