import React from 'react'
import "./Home.css";
import { Button } from '@chakra-ui/react';
const Home = () => {
  return (
    <div className='container home-page' id="home">
      <div className='Grid'>
      <div className='text-zone'>
     <h1>
      Hi , <br></br> This is Vaishnavi!
     </h1>
     <p>Ambitious full-stack developer with a specialization in MERN stack</p>
   
           </div>
      


      <div className='Img'>
        <img src='https://nilamkhose2001.github.io/static/media/bg.a987b7cc74413c62c9c6.PNG' height="350" width="600"></img>
      </div>
      </div>
    </div>
  )
}





export default Home