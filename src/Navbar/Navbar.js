import React from "react";
import {Link} from "@chakra-ui/react";
import "./Navbar.css";

// import Home from "./Components/Home";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
// import Project from "./Components/Project";
// import Skills from "./Components/Skills";
// import Resume from "./Components/Resume"

const Navbar = () => {
  const [isMobile,setIsMobile]=React.useState(false)
  return (
    <nav className="navbar">
       <h3 className="logo">Vaishnavi</h3>
       <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
       onClick={()=>setIsMobile(false)}>
          <Link href="#home" className="home">
          <li>Home</li>
          </Link>
          <Link href="#about" className="about">
          <li>About</li>
          </Link>
          <Link href="#skills" className="skill">
          <li>Skills</li>
          </Link>
         <Link href="#project" className="project">
          <li>Project</li>
          </Link>
          <Link href="#contact" className="contact">
          <li>Contact</li>
          </Link>
          <Link href="https://drive.google.com/file/d/1FAdpHUY9EaWyTcKBbuFFwy9a0Prxcuz2/view?usp=sharing" className="resume">
          <li>Resume</li>
          </Link>
       </ul>
       <button className="mobile-menu-icon" onClick={()=>setIsMobile(!isMobile)}>
          {isMobile? <i className="fas fa-times"></i>:<i className="fas fa-bars"></i>}
       
       </button>
    </nav>
  )
}

export default Navbar