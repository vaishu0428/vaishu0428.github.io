import React from 'react'
import "./About.css"
const About = () => {
  return (
    <div className='container1' id="about">
     <h1>About Me</h1>
     <div className='Grid1'>
       <div>
        <img src='https://avatars.githubusercontent.com/u/108001787?v=4' className='img' height="350" width="350"></img>
       </div>
       <div >
        <div className='personal'>
        <h2>I am Vaishnavi Chaudhari from Pune, Maharashtra.</h2>
        <p>I graduated in B.Sc.(Computer Science) during 2022 from Samarth college of Computer Science,Belhe.
I joined Masai school, which offers a 30 weeks full time course on a full stack web development programme. At Masai school we get hands-on experience to learn front end and backend technologies.</p>
       </div>
       </div>
     </div>
    </div>
  )
}

export default About