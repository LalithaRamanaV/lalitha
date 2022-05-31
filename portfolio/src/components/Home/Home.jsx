import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <div className="header-text">
        <h1>Hello Iam Lalitha Vadavalli</h1>
        <p>Hi, I am a Developer. I have been working on the MERN stack since couple of months in this span I have developed multiple projects which helped me to enhance my skills. Yes, having your strong base really helps and hence I am open to adapting to whichever framework is required.</p>
        <div className="head-bts">
          <Link to ="/about" className="btn- btn-white">
            <p className= "btn-text">Know more</p>
          </Link>
          <Link to ="/contact" className="btn btn-transparent">
            <p className="btn-text">Connect with me</p>
          </Link>
          <Home/>
        </div>
      </div>
    </div>
  )
}

export default Home