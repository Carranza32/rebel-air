import React, { Fragment } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function CarouselPage({title}) {
   return (
      <Fragment>
         <div className="container" style={{marginBottom:"15%"}}>
            <div className="tab-pane fade show active " id="v-pills-user" role="tabpanel" aria-labelledby="v-pills-user-tab">
               <h3>Commercial HVAC Services</h3>
               <p>Our team of commercial heating experts can provide your office or warehouse the expertise.</p>

               <img src={window.location.origin + "/assets/images/slider2.jpg"} alt="" className="img-flui custom-card-shadow" height="300"/>

               <p>We provide comprehensive home heating, cooling and plumbing service – from repairs, replacements and tune-ups to energy assessments and system enhancements. We pride ourselves on having a service team that is honest, reliable and committed to quality.</p>
               <p>We provide comprehensive home heating, cooling and plumbing service – from repairs, replacements and tune-ups to energy assessments and system enhancements. We pride ourselves on having a service team that is honest, reliable and committed to quality.</p>
            </div>
            <div className="tab-pane fade" id="v-pills-pooblastila" role="tabpanel" aria-labelledby="v-pills-pooblastila-tab">Pooblastila</div>
            <div className="tab-pane fade" id="v-pills-prijave" role="tabpanel" aria-labelledby="v-pills-prijave-tab">Prijave</div>
         </div>
      </Fragment>
   )
}

export default CarouselPage
