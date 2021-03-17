import React from 'react'
import { useTranslation } from 'react-i18next';

function Navbar() {
   const [t, i18n] = useTranslation("global");

   return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
         <div className="container-fluid bg-light">
         <a className="navbar-brand " href="#!">
            <img src="https://carranza32.github.io/rebel-air/assets/images/Logo.png" alt="" width="64" height="24" className="d-inline-block me-5" />
            Rebel Air
         </a>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
               <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     <i className="fas fa-language"></i> {t("navbar.title")}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                     <li><button className="dropdown-item" onClick={() => i18n.changeLanguage("en")}>{t("navbar.en")}</button></li>
                     <li><button className="dropdown-item" onClick={() => i18n.changeLanguage("es")}>{t("navbar.es")}</button></li>
                  </ul>
               </li>
               <li className="nav-item">
                  <a href="#!" className="nav-link" aria-current="page">{t("navbar.item-1")}</a>
               </li>
               <li className="nav-item">
                  <a href="#!" className="nav-link">{t("navbar.item-2")}</a>
               </li>
               <li className="nav-item">
                  <a href="#!" className="nav-link">{t("navbar.item-3")}</a>
               </li>
               <li className="nav-item">
                  <a href="#!" className="nav-link">{t("navbar.item-4")}</a>
               </li>
            </ul>
         </div>
         </div>
      </nav>
   )
}

export default Navbar
