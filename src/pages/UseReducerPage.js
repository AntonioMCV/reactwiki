import LoginUseReducer from '../components/LoginUseReducer'

const UseReducerPage = (props) => {

  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">useReducer</h1>
      <p className="alert alert-secondary">
        Con el hook <b>useReducer</b> tenemos un uso del estado vitaminado para ejecuciones mas complejas.<br/>
        Podemos echar un vistazo a este esquema para poder comprender su funcionamiento:<br/>
        <img loading='lazy' alt='' className="d-block mx-auto my-4" src='/schemeReducer.png' /><br/>
        En este caso estamos validando el mail y la password por useReducer y hacemos uso del useEffect para habilitar o deshabilitar el boton solo en caso de que cambie el estado de la validación, inspecciona el código del proyecto para ver su funcionamiento.
      </p>
      
      <LoginUseReducer />
    </>
  )
}

export default UseReducerPage