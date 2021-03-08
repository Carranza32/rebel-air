import React from 'react'

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
         <div className="container-fluid bg">
         <a className="navbar-brand " href="#!">
            <img src={window.location.origin + "/assets/images/Logo.png"} alt="" width="64" height="24" class="d-inline-block me-5" />
            Rebel Air
         </a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               <li className="nav-item">
                  <a href="#!" className="nav-link" aria-current="page">Home</a>
               </li>
               <li className="nav-item">
                  <a href="#!" className="nav-link">Skills</a>
               </li>
               <li className="nav-item">
                  <a href="#!" className="nav-link">About us</a>
               </li>
               <li className="nav-item">
                  <a href="#!" className="nav-link">Contact</a>
               </li>
            </ul>
         </div>
         </div>
      </nav>
   )
}

export default Navbar
