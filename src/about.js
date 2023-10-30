import React from 'react';
import './about.css';
import Nav from "./nav"


const about = () => {
  return (
    <>
        <Nav />
    
    <div className='prod'>
      <div className="imag"><img src="./asset/dog.jpg" alt="about" /></div>
      <div className="con">
        <h1>About WorldWide.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo, cumque sint. Soluta error eius a, consequatur et
           sapiente delectus tempore amet placeat neque, reiciendis molestiae enim aspernatur iste hic cumque!</p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut, corporis facilis
           praesentium beatae velit magni deserunt excepturi maiores atque a, labore quis fugit </p>
      </div>

    </div>
    </>
  )
}

export default about