import React, { useState } from 'react'
import axios from 'axios';

function ContactForm() {
   const API_PATH = 'https://www.kairosalessandria.com/emailApi/index.php';

   const [correo, setCorreo] = useState({
      name: '',
      email: '',
      coments: ''
   })
   const [error, setError] = useState(false);
   const [mailSent, setMailSent] = useState('');
   const [errorEmail, setErrorEmail] = useState(false);

   const handleState = (e) => {
      setCorreo({
         ...correo,
         [e.target.name] : e.target.value
      });
   }

   //Extraer los valores
   const {name, email, coments} = correo;

   //Enviar correo
   const submitCorreo = (e) => {
      e.preventDefault();

      //validar
      if (name.trim() === '' || email.trim() === '' || coments.trim() === '') {
         setError(true);
         return;
      }
      setError(false);

      // reiniciar
      setCorreo({
         name: '',
         email: '',
         coments: ''
      })

      axios({
         method: 'post',
         url: `${API_PATH}`,
         headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Content-Type': 'application/json',
          },
         data: correo
      }).then(result => {
         console.log(result.data);
         setMailSent( result.data );
         setErrorEmail(false);
      }).catch(error => {
         console.log('error', error.message);
         setErrorEmail(true);
      });
   }

   return (
      <div id="contact" className="mt-5">
         <div className="container">
            <div className="row">
               <div className="col">
                  <form 
                     className="card custom-card-shadow p-5 mx-auto" 
                     style={{maxWidth: 30+'rem'}}
                     onSubmit={submitCorreo}
                  >
                     {error ? <p className="alert alert-danger">Errore durante l'invio del modulo</p> : null}
                     {errorEmail ? <p className="alert alert-danger">Something gone wrong</p> : null}

                     <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input 
                           type="text" 
                           className="form-control" 
                           id="name" 
                           name="name" 
                           required
                           onChange={handleState}
                           value={name}
                        />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input 
                           type="email" 
                           className="form-control" 
                           id="exampleFormControlInput1" 
                           placeholder="name@example.com" 
                           name="email" 
                           required
                           onChange={handleState}
                           value={email}
                        />
                     </div>
                     <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Content</label>
                        <textarea 
                           className="form-control" 
                           id="exampleFormControlTextarea1" 
                           rows="3" 
                           name="coments" 
                           required
                           onChange={handleState}
                           value={coments}
                        ></textarea>
                     </div>
                     <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn primary-color gradient-blue-shadow" type="submit"><i className="fa fa-paper-plane me-2"></i>Send</button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default ContactForm
