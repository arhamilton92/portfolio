import React from "react";
import "../assets/style.css";

function Nav() {

  return (
      <div>
    <nav className="navbar navbar-dark">
    </nav>
  <nav className="collapse navbar-dark pb-3" id="navbarToggleExternalContent">
      <div className="d-flex justify-content-center">
          <a className="nav-item nav-link" ><h5>About Me</h5></a>
          <a className="nav-item nav-link" ><h5>Portfolio</h5></a>
          <a className="nav-item nav-link" ><h5>Contact</h5></a>
      </div>
  </nav>
  <nav className="navbar navbar-light" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <a className="navbar-brand ml-5 mt-2" href="#"><h3>Andrea Hamilton</h3></a>
      <div className="navbar-nav float-right text-right pr-3 ">
      <button className="navbar-toggler mr-5" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
      </button>
      </div>
  </nav>
  <nav className="navbar navbar-dark">
    </nav>
  </div>
  );
}

export default Nav;
