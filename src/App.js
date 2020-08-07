import React from 'react';
import Navbar from "./components/Nav";
import Footer from "./components/Footer"
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
          <p id="about"> Hi! My name's Andrea. 
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
          <div className="col-lg-2 col-sm-12 col-md-4 card p-3" id="spellbindr">
            <div className="row parent">
              <div className="col cardheader p-2 parent">
                <h5>spellbindr</h5>
              </div>
            </div>
            <div className="row"> 
              <div className="col p-5">
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-sm-12 col-md-4 card p-3">
            hello
          </div>
          <div className="col-lg-2 col-sm-12 col-md-4 card p-3">
            hello
          </div>
          <div className="col-lg-2 col-sm-12 col-md-4 card p-3">
            hello
          </div>
        </div>
    </div>
    <div className="container-fluid dark">
      <div className="row mt-5">
        <div className="col-6 mt-5">
          <div className="contact">
            <h1 className="centered contact-text">Want to talk?</h1>
            <p className="lets-talk"> 
              Let's work together.
            </p>
            <hr></hr>
            <h5 className="contact-info">andrea.r.hamilton92@gmail.com</h5>
            <h5 className="contact-info">678-763-9217</h5>
          </div>
        </div>
        <div className="col-6 w-100 p-5">
        <div class="contact-form">
              <section class="form-group" >
                  <div class="col-sm-10">          
                    <input type="text" class="form-control contact-form" placeholder="First & Last Name" />
                  </div>
              </section>
              <section class="form-group">
                  <div class="col-sm-10">
                    <input type="email" class="form-control contact-form" placeholder="Email" />
                  </div>
                </section>
              <section class="form-group">
                  <div class="col-sm-10">
                    <textarea class="form-control contact-form" rows="4" placeholder="Tell me about your project!" ></textarea>
                  </div>
                </section>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
}

export default App;
