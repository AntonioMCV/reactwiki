import LoginUseEffect from '../components/LoginUseEffect'
import { Link } from "react-router-dom";

const useEffectPage = (props) => {

  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">useEffect & ModuleCSS</h1>
      <p className="alert alert-secondary">
        Con el hook <b>useEffect</b> lo que le estamos indicando a React es que el componente <b>tiene que hacer algo después de renderizarse</b>.<br/>
        <b>El componente volverá a renderizarse si cambiamos su estado</b> y con ello volverá a ejecutar el useEffect.<br/>
        <b>Podemos evitar que ocurra esto añadiendole un array vacio</b> como segundo valor <b>o que se vuelva a ejecutar el useEffect solo si un estado en concreto cambia metiendolo en dicho array</b>.<br/>
        Tambien podemos hacer <b>que ocurra algo una vez que el componente se desmota</b> para poder liberar memoria o cualquier otro tipo de función, esto lo haremos <b>retornando la propia funcion del useEffect.</b><br/><br/>

        En este ejemplo de validacion estamos haciedo uso del hook <b>useEffect</b> para hacer validaciones solo cuando cambia el estado de mail y de password (Estos cambian segun se escribe), pero para no comprobar la validacion mientras se esta escribiendo estamos aplicando un setTimeout y limpiandolo cada vez que se vuelve a escribir (Gracias al retorno del hook)<br/><br/>

        Por otro lado <b>se han aplicado estilos CSS modulares</b>, estos se usan para que los estilos se apliquen a un solo componente <b>evitando una indeseada propagación</b>.<br/><br/>
        Inspecciona el código del proyecto y comprueba como van apareciendo los console.log según el caso en las funcciones de useEffect, y como se aplican los estilos modulares.<br/><br/>

        Esto es solo un ejemplo para ver el funcionamiento del useEffect pero para un caso así sería mas optimo de hacer uso del hook <Link to="/use-reducer">useReducer</Link>.
      </p>
      <LoginUseEffect />
    </>
  )
}

export default useEffectPage