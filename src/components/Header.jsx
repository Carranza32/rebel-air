import React, { Fragment } from 'react'
import { useTranslation } from "react-i18next";

function Header() {
   const [t, i18n] = useTranslation("global");

   return (
      <Fragment>
         <div className="Header">
            <div className="Header-background"></div>
            <div className="Header-content">
               <div className="Header-hero">
                  <h1>{t("header.title")} <br/> <strong className="primary-color-tex bold">{t("header.title-bold")}</strong></h1>
                  <button className="Button mt-5">{t("header.button")}</button>
               </div>
               <div className="Header-visuals">
                  <img src="https://carranza32.github.io/rebel-air/assets/images/Logo.png" alt="" className="img-fluid" />
               </div>
            </div>
         </div>
      </Fragment>
      
   )
}

export default Header
