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
      <div className="row parent introrow">
        <div className="col-12 w-100 m-5">
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
      <div className="row m-4">
        <div className="col-12">
          <h3>PROJECTS:</h3>
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
    <div className="container-fluid dark">
      <div className="row mt-5">
        <div className="col-6 mt-5">
          <h1 className="centered intro">Want to talk?</h1>
          <p id="lets-talk"> 
            Let's work together.
          </p>
        </div>
        <div className="col-6 w-100 mt-5 mb-5">
        <div class="contact-form">
              <section class="form-group" >
                  <div class="col-sm-10">          
                    <input type="text" class="form-control" placeholder="lol this doesn't do anything" />
                  </div>
              </section>
              <section class="form-group">
                  <div class="col-sm-10">
                    <input type="email" class="form-control" placeholder="But you can type in it. Neat" />
                  </div>
                </section>
              <section class="form-group">
                  <div class="col-sm-10">
                    <textarea class="form-control" rows="4" placeholder="it's stretchy!! hit submit" ></textarea>
                  </div>
                </section>
          </div>
        </div>
      </div>
    </div>
    <nav className="navbar navbar-dark">
    </nav>
      <div className="container-fluid text-center text-md-left p-4">
        <div className="row">
          <section className="col align-self-center">
              <a className="text-center" href="https://github.com/arhamilton92/responsive-portfolio"><h3>GITHUB</h3></a>
          </section>
        </div>
      </div>
  </div>
  );
}

export default App;
