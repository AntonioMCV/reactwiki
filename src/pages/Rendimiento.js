import React from "react";
import RendimientoPadre from "../components/Rendimiento/RendimientoPadre";

export default function Rendimiento () {

  return <>
      <h1 className="bg-dark text-white text-center my-4 py-4">Rendimiento de renderizados</h1>
      <p className="alert alert-secondary">
        Cuando tenemos componentes muy pesados y estos se renderizan innecesariamente puede afectar al rendimiento de nuestra aplización.<br/><br/>

        Para no reenderizar el elemento hijo si se vuelve a renderizar el padre usamos la funcion <b>React.memo(elemento)</b>.<br/>
        El elemento solo se renderizará al cambiar sus props.<br/><br/>

        Para guardar funciones y estas no se vuelvan a de declarar si se reenderiza de nuevo el componente usamos el hook <b>useCallback</b>.<br/>
        A tener en cuenta si pasamos una funcion a un elemento hijo con una prop. (En este caso le pasamos la función cambiarNombrePadre, para cambiar el estado del padre desde el hijo)<br/><br/>

        En este ejemplo Tenemos a un componente que tiene un componente hijo. Gracias a la extensión <b>react developers tools</b> y marcando en su configuración "<b>Highlight updates when components render</b>" podemos comprobar los componentes que se renderizan segun interactuamos con ellos.
      </p>

      <RendimientoPadre/>
  </>
}