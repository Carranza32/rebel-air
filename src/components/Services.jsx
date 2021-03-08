import React from 'react'

function Services({icon, body}) {
   return (
      <div className="col-md-3 col-sm-12">
         <div class="card custom-card-shadow mb-5" id="service-card">
            <i class={`${icon} d-flex justify-content-center primary-color-text gradient-blue-shadow-text`}></i>
            <div class="card-body">
               <h4 class="card-title text-center">Air Conditioner Replacement</h4>
               <br/>
               <p class="card-text">We provide our clients with all the range of services. We will fix any malfunction in record terms so you will have no worries! We offer a huge number of</p>
            </div>
         </div>
      </div>
   )
}

export default Services
