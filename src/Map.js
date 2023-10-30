import React, { useState } from 'react';
import './map.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { UseData } from './DataProvider';
import { Link } from 'react-router-dom';

const Map = () => {
  const { Toaddform } = UseData()
  function LocationMarker() {
    const [position, setPosition] = useState(null)
    useMapEvents({
      click(e) {

        setPosition(e.latlng)
      },

    })

    console.log(position);

  }
  return (
    <div className='mapContainer' onClick={Toaddform}>
      <Link to='Addmap' >


        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className='mapin'>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LocationMarker />
          <Marker position={[51.505, -0.09]}>
            <Popup>

              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </Link>
    </div>
  )
}

export default Map