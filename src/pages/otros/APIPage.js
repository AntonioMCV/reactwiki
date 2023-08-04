import React from 'react';
import Api from 'components/API/API';

function ApiPage() {


  return (
    <React.Fragment>
      <h1 className="bg-dark text-white text-center my-4 py-4">APIs</h1>
      <p className="alert alert-secondary">
        Usamos las funciones asincronas <b>async</b> de JavaScript para hacer peticiones a APIs, haremos las peticiones con funciones <b>fetch</b> añadiendole el <b>await</b> delante- <br/>
        Para posibles estados como los errores debemos envolver con <b>try</b> todo el código de los datos y con <b>catch</b> podremos encontrar las diferentes respuestas de la petición.<br/><br/>
        Este tipo de código es propio de JavaScript para una información mas concreta puede consultar en mdn web docs los
        &nbsp;<a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function" target="_blank" rel="noreferrer">async functions</a> y los
        &nbsp;<a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/try...catch" target="_blank" rel="noreferrer">try...catch</a>.<br/><br/>

        Este ejempo se ha llevado a cabo con <a href="https://console.firebase.google.com/" target="_blank" rel="noreferrer">Firebase</a> y es posible que deje de funcionar en un futuro próximo.<br/>
        Si es necesario tenga en presente crear una cuenta en dicha página y cambiar la variable del componente <b>URLAPI</b>
      </p>
      <Api/>
    </React.Fragment>
  );
}

export default ApiPage;
