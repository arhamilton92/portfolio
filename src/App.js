import React from 'react';
import Navbar from "./components/Nav";
import "./assets/style.css";

function App() {
  return (
    <div>
    <div> 
      <Navbar />
    </div>
    <div className="container">
      <div className="row parent mt-5">
        <div className="col-12 w-100">
          <h1 className="centered intro">Let's create something.</h1>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
