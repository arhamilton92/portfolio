import React from 'react';
import Navbar from "./components/Nav";
import "./assets/style.css";

function App() {
  return (
    <div>
    <div> 
      <Navbar />
    </div>
    <div className="container-fluid parent dark">
      <div className="row parent introrow mt-5">
        <div className="col-12 w-100">
          <h1 className="centered intro">Let's create something.</h1>
          <p id="about"> My name's Andrea. 
          <br></br> 
          I'm a web designer, currently seeking creative challenges to test my skills.
          <br></br>
          <br></br>
          Have a project in mind?
          <span id="contact-me">&emsp; Contact Me</span> </p>
        </div>
      </div>
    </div>
    <div className="container-fluid portfolio parent p-3">
      <div className="row m-3 mt-4">
        <div className="col-12">
          <h3>WORK:</h3>
        </div>
      </div>
        <div className="row"> 
          <div className="col-2 card m-3">
            hello
          </div>
          <div className="col-2 card m-3">
            hello
          </div>
          <div className="col-2 card m-3">
            hello
          </div>
          <div className="col-2 card m-3">
            hello
          </div>
        </div>
    </div>
  </div>
  );
}

export default App;
