import React from 'react'
import GitHubCalendar from "react-github-calendar";
import "./Github.css"
const Github = () => {
  return (
    <div className='cont3'>
        <h1>Github Calender and Stats</h1>
        <div className='cal'>
        <GitHubCalendar username="vaishu0428" className="calender" />
        </div>
        <div className='Stats'>
     <img
            alt="7oSkaaa's Github Stats"
            src="https://github-readme-stats.vercel.app/api?username=vaishu0428&show_icons=true&count_private=true&theme=solarized-light"
            height="192px"
            // style={{border:"1px solid red"}}
          />
          <img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=vaishu0428&&theme=solarized-light" alt="vaishu0428" 
            //style={{border:"1px solid "}}
           
            />
    </div>
    </div>
  )
}

export default Github;