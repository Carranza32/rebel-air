import React from 'react'
import { useTranslation } from 'react-i18next';

function Best() {
   const [t, i18n] = useTranslation("global");

   return (
      <div id="best" className="mt-5 overflow-hidden">
         <div className="row">
            <div className="col-sm-12 col-md-6 p-0">
               <img src="https://carranza32.github.io/rebel-air/assets/images/20944212.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-sm-12 col-md-6 primary-color p-5 background-points">
               <div className="d-flex justify-content-around flex-column">
                  <div className="">
                     <h5 className="">{t("about.title")}</h5>
                     <p className="display-5"><strong>{t("about.title-bold")}</strong></p>
                  </div>
                  <div className="my-5">
                     <p className="text-justify">{t("about.text")}</p>
                  </div>
                  <div className="">
                     <a href="#!" type="button" className="btn gradient-red hover-button shadow rounded-pill me-5" style={{color:'#fff'}}>{t("about.button")}</a>
                     <a href="#!" type="button" className="btn gradient-red hover-button shadow rounded-pill" style={{color:'#fff'}}><i className="fas fa-phone-alt"></i> 8978-5632</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Best
