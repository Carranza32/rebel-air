import { Fragment } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Best from "../components/Best";
import Services from "../components/Services";
import CarouselPage from "../components/CarouselPage";
import Footer from "../components/Footer";

function Index() {
   
  return (
      <Fragment>
         <Header />
         <div id="servicios" className="container mt-5">
            <p className="display-5 text-center primary-color-text">We are professionals</p>
            <div className="row mt-5">
               <Services icon="far fa-snowflake"/>
               <Services icon="fas fa-tools"/>
               <Services icon="fas fa-leaf"/>
               <Services icon="far fa-sun"/>
            </div>
         </div>
         <Best />
         <div className="mt-5 background-tiny-square" id="slider-cards">
            <div className="container mb-5">
               <p className="display-5 text-center primary-color-text">Featured Services</p>
               <br/><br/><br/>
               <div class="container">
                  <div class="row">
                     <div class="col-sm-12 col-md-4">
                        <div className="d-flex justify-content-center mb-5">
                           <div className="text-end">
                              <h4>Energy Efficiency</h4>
                              <p>Our company offers the most efficient and the greenest options for home heating.</p>
                           </div>
                           <div className="icon-circle">
                              <i class="far fa-snowflake primary-color-text gradient-blue-shadow-text"></i>
                           </div>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-center mt-5">
                           <div className="text-end">
                              <h4>Energy Efficiency</h4>
                              <p>Our company offers the most efficient and the greenest options for home heating.</p>
                           </div>
                           <div className="icon-circle">
                              <i class="far fa-snowflake primary-color-text gradient-blue-shadow-text"></i>
                           </div>
                        </div>
                     </div>
                     <div class="col-sm-12 col-md-4 d-flex justify-content-center">
                        <img src="https://carranza32.github.io/rebel-air/assets/images/pulse.png" alt="" className="img-fluid"/>
                     </div>
                     <div class="col-sm-12 col-md-4">
                        <div className="d-flex justify-content-center mb-5">
                           <div className="icon-circle">
                              <i class="far fa-snowflake primary-color-text gradient-blue-shadow-text"></i>
                           </div>
                           <div className="text-start">
                              <h4>Energy Efficiency</h4>
                              <p>Our company offers the most efficient and the greenest options for home heating.</p>
                           </div>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-center mt-5">
                           <div className="icon-circle">
                              <i class="far fa-snowflake primary-color-text gradient-blue-shadow-text"></i>
                           </div>
                           <div className="text-start">
                              <h4>Energy Efficiency</h4>
                              <p>Our company offers the most efficient and the greenest options for home heating.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="row background-contact mx-0 p-5 mb-5">
            <div className="col-12 text-white">
               <div className="container">
                  <p className="display-4">Time for a New System?</p>
                  <h4>Call an Air Supply today for a quote on your new home comfort system.</h4>
                  <button type="button" className="btn btn-outline-light mt-5">Contact</button>
               </div>
            </div>
         </div>

         <div className="row mx-0 mb-5">
            <div className="col background-big-square">
               <ContactForm />
            </div>
         </div>
         <Footer />
      </Fragment>
  );
}

export default Index;
