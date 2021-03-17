import React, { Fragment } from 'react'

function Social() {
   return (
      <Fragment>
         
         <section className="row mx-0 p-5 background-points">
            <div className="col-12 my-auto text-center text-white border">
               <div className="container my-5">
                  <div className="row">
                     <div className="col-sm-12 col-md-4">
                        <div className="">
                           <div className="card-img-top fs-3 mb-3">
                              <i className="fa fa-balance-scale"></i>
                           </div>
                           <p className="h1">Una Squadra</p>
                           <p className="text-justify">La scelta di lavorare in gruppo è nata dalla convinzione che si possano produrre dei risultati incredibili, interagendo insieme verso un obiettivo comune.</p>
                        </div>
                     </div>
                     <div className="col-sm-12 col-md-4">
                        <div className="">
                           <div className="card-img-top fs-3 mb-3">
                              <i className="fa fa-balance-scale"></i>
                           </div>
                           <p className="h1">La nostra filosofia</p>
                           <p className="text-justify">Per quanto ammiriamo i vincitori solitari, la verità è che nessuno è capace di fare qualcosa di grande valore da solo.</p>
                        </div>
                     </div>
                     <div className="col-sm-12 col-md-4">
                        <div className="">
                           <div className="card-img-top fs-3 mb-3">
                              <i className="fa fa-balance-scale"></i>
                           </div>
                           <p className="h1">La chiave del successo</p>
                           <p className="text-justify">Ognuno di noi condivide il merito per le vittorie e le responsabilità per le sconfitte, favorendo una genuina umiltà e un senso comunitario autentico.</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </Fragment>
   )
}

export default Social
