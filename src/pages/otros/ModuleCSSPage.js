import LoginUseEffect from 'components/LoginUseEffect'

const ModuleCSSPage = () => {

  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">ModuleCSS</h1>
      <p className="alert alert-secondary">
        Gracias a los <b>estilos CSS modulares</b> podemos hacer que los estilos se apliquen a un solo componente <b>evitando una indeseada propagación</b>.<br/><br/>
        Inspecciona el código del proyecto y comprueba como van apareciendo los console.log según el caso en las funcciones de useEffect, y como se aplican los estilos modulares.<br/><br/>
      </p>
      <LoginUseEffect />
    </>
  )
}

export default ModuleCSSPage