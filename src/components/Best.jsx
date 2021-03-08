import React from 'react'

function Best() {
   return (
      <div id="best" className="mt-5 overflow-hidden">
         <div className="row">
            <div className="col-sm-12 col-md-6 p-0">
               <img src={window.location.origin + "/assets/images/20944212.jpg"} alt="" className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-6 primary-color p-5 background-points">
               <h5 className="">Heating & Air Conditioning (About Us)</h5>
               <p className="display-5"><strong>Repairs & Services</strong></p>
               <p className="text-justify">
                  Our company is reliable, and our work is trusted. We provide worry-free service you can always count on. We have gathered the best staff that will do any kind of repair for you.
               </p>
               <p className="text-justify">
                  Our company is reliable, and our work is trusted. We provide worry-free service you can always count on. We have gathered the best staff that will do any kind of repair for you.
               </p>
               <p className="text-justify">
                  Our company is reliable, and our work is trusted. We provide worry-free service you can always count on. We have gathered the best staff that will do any kind of repair for you.
               </p>

               <div className="mt-5">
                  <a href="#!" type="button" className="btn gradient-red shadow rounded-pill me-5">Make an Appoinment</a>
                  <a href="#!" type="button" className="btn gradient-red shadow rounded-pill"><i className="fas fa-phone-alt"></i> 8978-5632</a>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Best
