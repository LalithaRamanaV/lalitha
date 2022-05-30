import React from 'react'
import "./App.css"
import {
  BrowserRouter,
  Route
} from "react-router-dom";

const SampleComponent = () =>{
  return(
    <div>
      <h1>This is home page</h1>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Route path="/" component={SampleComponent}></Route>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App