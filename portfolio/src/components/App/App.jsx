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

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Route path="/" component={Home} exact></Route>
        <Route path="/about" component={About}></Route>
        <Route path="/projects" component={Projects}></Route>
        <Route path="/skills" component={Skills}></Route>
        <Route path="/contact" component={Contact}></Route>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App