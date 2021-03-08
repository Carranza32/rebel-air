import React from 'react'

function Header() {
   return (
      <header className="gradient-purple-blu ">
         <div className="header-content">
            <div className="row mt-5">
               <div className="col-sm-12 col-md-7">
                  <h1 className="display-3">Expert Heating, Cooling, and <strong className="primary-color-tex bold">Air Conditioning Installation & Repair</strong></h1>
                  <div className="mt-5">
                     <a href="/about" className="btn primary-color gradient-blue-shadow rounded-pill me-4">Más sobre nosotros</a>
                  </div>
               </div>
               <div className="col-sm-12 col-md-5">
                  <img src="%PUBLIC_URL%/rebel-air/assets/images/Logo.png" alt="" className="img-fluid" />
               </div>
            </div>
         </div>
      </header>
   )
}

export default Header
