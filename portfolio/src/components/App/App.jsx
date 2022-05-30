import React from 'react'
import Home from "./../Home/Home"
import About from "./../About/About"
import Projects from "./../Projects/Projects"
import Contact from "./../Contact/Contact"
import Skills from "./../Skills/Skills"
import "./App.css"
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import NavBar from '../NavBar/NavBar'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <NavBar/>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About} exact></Route>
        <Route path="/projects" component={Projects} exact></Route>
        <Route path="/skills" component={Skills} exact></Route>
        <Route path="/contact" component={Contact} exact></Route>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App