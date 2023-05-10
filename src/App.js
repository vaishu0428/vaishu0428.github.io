import "./App.css"
import React from "react";
import Home from "./Components/Home";
 import Navbar from "./Navbar/Navbar";
import Github from "./Components/Github";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Skills from "./Components/Skills";


// import {BrowserRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="app" >
     
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Github />
    
      <Contact />
    </div>
  );
}

export default App;
