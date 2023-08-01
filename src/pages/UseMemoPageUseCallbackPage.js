import React from "react";
import RendimientoPadre from "../components/Rendimiento/RendimientoPadre";

export default function UseMemoPageUseCallback () {

  return <>
      <h1 className="bg-dark text-white text-center my-4 py-4">useMemo y useCallback</h1>
      <p className="alert alert-secondary">
        Cuando tenemos componentes muy pesados y estos se renderizan innecesariamente puede afectar al rendimiento de nuestra aplización.<br/><br/>

        Para no reenderizar el elemento hijo si se vuelve a renderizar el padre usamos la funcion <b>React.memo(elemento)</b>.<br/>
        <b>El elemento solo se renderizará al cambiar sus props</b>.<br/><br/>

        Además a este componente le estamos pasando desde el padre el array numbers mediante la prop exampleArray usando el hook <b>useMemo</b>.<br/>
        Tambien le pasamos la función cambiarNombrePadre, para cambiar el estado del padre desde el hijo usando el hook <b>useCallback</b>.<br/><br/>

        Se han de usar estos hooks porque hay que tener en cuenta que tanto si pasamos <b>props de array, de objetos o de metodos</b>, estos <b>no son valores primitivos de JavaScript</b>,
        y este <b>se piensa que son diferentes</b> aunque realmente no hayan cambiado y por eso debemos memorizarlos con estos hooks.<br/><br/>

        Gracias a la extensión <b>react developers tools</b> y marcando en su configuración "<b>Highlight updates when components render</b>" podemos comprobar los componentes que se renderizan segun interactuamos con ellos.<br/>
        Puedes ayudarte tambien viendo los logs de la consola.
      </p>

      <RendimientoPadre/>
  </>
}