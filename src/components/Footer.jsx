import React from 'react'
import { useTranslation } from 'react-i18next';

function Footer() {
   const [t, i18n] = useTranslation("global");

   return (
      <footer className="text-center text-lg-start">
         <div className="container p-4">
            <div className="row">
               <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                  <h4 className="text-uppercase">Rebel Air</h4>
                  <div className="d-flex justify-content-center justify-content-lg-start">
                     <div className="social-icons primary-color text-center hover-button shadow">
                        <i class="fab fa-facebook-f"></i>
                     </div>
                     <div className="social-icons primary-color-red text-center hover-button shadow">
                        <i class="fab fa-instagram"></i>
                     </div>
                     <div className="social-icons text-center hover-button shadow" style={{backgroundColor: "#3dd3e6", color: "#fff"}}>
                        <i class="fab fa-twitter"></i>
                     </div>
                  </div>
               </div>
         
               <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase">Menu</h5>
                  <br/>
         
                  <ul className="list-unstyled mb-0">
                     <li>
                        <a href="/home" className="">{t("navbar.item-1")}</a>
                     </li>
                     <li>
                        <a href="/about" className="">{t("navbar.item-2")}</a>
                     </li>
                     <li>
                        <a href="/services" className="">{t("navbar.item-3")}</a>
                     </li>
                     <li>
                        <a href="/contact" className="">{t("navbar.item-4")}</a>
                     </li>
                  </ul>
               </div>

               <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                  <h5 className="text-uppercase mb-0">Contact</h5>
                  <br/>
         
                  <ul className="list-unstyled">
                     <li>
                        <div className="">
                           <i className="fs-6 fa fa-envelope me-2"></i>
                           <span>email@gmail.com</span>
                           <p className="text-muted">Send us your query anytime!</p>
                        </div>
                     </li>
                     <li>
                        <div className="">
                           <i className="fs-6 fa fa-home me-2"></i>
                           <span>Direction (c.a.p. 15033)</span>
                           <p className="text-muted"> - Via Candiani d’Olivola n. 9</p>
                        </div>
                     </li>
                     <li>
                        <div className="">
                           <i className="fs-6 fa fa-home me-2"></i>
                           <span>Direction (c.a.p. 15121)</span>
                           <p className="text-muted"> - Via Mario Maggioli n. 41</p>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
