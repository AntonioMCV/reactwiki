import React from "react";
import LazyComponentToLoad from "../components/LazyComponent";

export default function LazyComponentPage () {

  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">
        Lazy Componet
      </h1>
      <p className="alert alert-secondary">
        Si abrimos la consola del navegador podremos comprobar que no nos aparecerá el mensage del componente "<b>carga del lazy component</b>", hasta que llegue el scroll a mostralo, esto es gracias a la clase <b>IntersectionObserver</b>.<br/><br/>
        Estamos observando la caja que envuelve al componente usando una referecia de React gracias a su metodo <b>useRef()</b>.<br/><br/>
        Por rendimiento siempre nos deberemos desconectar de la observación con el metodo <b>disconnect()</b> cuando ya no tengamos que usarla.<br/><br/>
        Por otro lado tambien en la consola podemos ver como se va actualizando las propiedades del objeto con un monton de información que podremos utilizar segun a nuestras necesidades.
      </p>
      <div className="bg-dark text-white text-center my-4 py-4" style={{ height: '200vh'}}>
        <h1 className="text-center mt-5 pt-5">Haz scroll hasta llegar al componente para cargarlo!</h1>
      </div>
      <LazyComponentToLoad/>
    </>
  )
}
