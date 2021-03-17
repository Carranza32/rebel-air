import { Fragment } from "react";
import ContactForm from "../components/ContactForm";
import Header from "../components/Header";
import Best from "../components/Best";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Social from "../components/Social";
import { useTranslation } from "react-i18next";

function Index() {
   const [t, i18n] = useTranslation("global");
   
  return (
      <Fragment>
         <Header />
         <div id="servicios" className="container mt-5">
            <p className="display-5 text-center primary-color-text">{t("skills.title")}</p>
            <div className="row mt-5">
               <Services icon="far fa-snowflake" title={t("skills.item-1.title")} body={t("skills.item-1.description")}/>
               <Services icon="fas fa-tools" title={t("skills.item-2.title")} body={t("skills.item-2.description")}/>
               <Services icon="fas fa-leaf" title={t("skills.item-3.title")} body={t("skills.item-3.description")}/>
               <Services icon="far fa-sun" title={t("skills.item-4.title")} body={t("skills.item-4.description")}/>
            </div>
         </div>
         <Best />
         <div className="mt-5 background-tiny-square" id="slider-cards">
            <div className="container mb-5">
               <p className="display-5 text-center primary-color-text">{t("services.title")}</p>
               <br/><br/><br/>
               <div className="container">
                  <div className="row">
                     <div className="col-sm-12 col-md-4">
                        <div className="d-flex justify-content-center mb-5">
                           <div className="text-end">
                              <h4>{t("services.item-1.title")}</h4>
                              <p>{t("services.item-1.description")}</p>
                           </div>
                           <div className="icon-circle">
                              <i className="far fa-snowflake primary-color-text gradient-blue-shadow-text"></i>
                           </div>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-center mt-5">
                           <div className="text-end">
                              <h4>{t("services.item-2.title")}</h4>
                              <p>{t("services.item-2.description")}</p>
                           </div>
                           <div className="icon-circle">
                              <i className="far fa-snowflake primary-color-text gradient-blue-shadow-text"></i>
                           </div>
                        </div>
                     </div>
                     <div className="col-sm-12 col-md-4 d-flex justify-content-center">
                        <img src="https://carranza32.github.io/rebel-air/assets/images/pulse.png" alt="" className="img-fluid"/>
                     </div>
                     <div className="col-sm-12 col-md-4">
                        <div className="d-flex justify-content-center mb-5">
                           <div className="icon-circle">
                              <i className="far fa-snowflake primary-color-text gradient-blue-shadow-text"></i>
                           </div>
                           <div className="text-start">
                              <h4>{t("services.item-3.title")}</h4>
                              <p>{t("services.item-3.description")}</p>
                           </div>
                        </div>
                        <br/>
                        <div className="d-flex justify-content-center mt-5">
                           <div className="icon-circle">
                              <i className="far fa-snowflake primary-color-text gradient-blue-shadow-text"></i>
                           </div>
                           <div className="text-start">
                              <h4>{t("services.item-4.title")}</h4>
                              <p>{t("services.item-4.description")}</p>
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
                  <p className="display-4">{t("banner.title")}</p>
                  <h4>{t("banner.subtitle")}</h4>
                  <button type="button" className="btn btn-outline-light bg-gradient mt-5">{t("banner.button")}</button>
               </div>
            </div>
         </div>

         <div className="row mx-0 mb-5">
            <div className="col background-big-square">
               <ContactForm />
            </div>
         </div>

         <div className="whatsapp hover-button">
            <i class="fab fa-whatsapp"></i>
            <span>7889-6989</span>
         </div>

         <Footer />
      </Fragment>
  );
}

export default Index;
