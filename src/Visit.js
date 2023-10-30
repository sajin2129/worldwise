import React from 'react';
import './visit.css'
import { Link, useParams } from 'react-router-dom';
import { UseData } from './DataProvider';

const Visit = () => {
    const { cities } = UseData()
    const { id } = useParams()

    const newData = cities.find((e) => e.id === Number(id))
    console.log(id);

    return (
        <div className="citd">

            <div className='citdet'>
                <p>{newData.country}</p>
                <h3>{newData.countryCode} {newData.cityname}</h3>
                <p>YOU WENT TO {newData.cityname} ON</p>
                <h3>{newData.dates}</h3>
                <p>LEARN MORE</p>
                <h4>{newData.visitnotes}</h4>
                <div className='bac'>

                    <Link to='/loca/City' style={{ textDecoration: "none" }}><button>BACK</button></Link>

                </div>
            </div>


        </div>
    )
}

export default Visit