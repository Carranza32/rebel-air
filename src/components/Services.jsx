import React from 'react'
import { useTranslation } from 'react-i18next';

function Services({icon, title, body}) {
   const [t, i18n] = useTranslation("global");

   return (
      <div className="col-sm-12 col-md-6 col-lg-3">
         <div className="card custom-card-shadow mb-5 service-card">
            <i className={`${icon} d-flex justify-content-center primary-color-text gradient-blue-shadow-text`}></i>
            <div className="card-body">
               <h4 className="card-title text-center">{title}</h4>
               <br/>
               <p className="card-text">{body}</p>
            </div>
         </div>
      </div>
   )
}

export default Services
