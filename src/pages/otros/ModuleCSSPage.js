import LoginUseEffect from 'components/LoginUseEffect'

const ModuleCSSPage = () => {

  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">ModuleCSS</h1>
      <p className="alert alert-secondary">
        Gracias a los <b>estilos CSS modulares</b> podemos hacer que los estilos se apliquen a un solo componente <b>evitando una indeseada propagación</b>.<br/><br/>
        Para ello <b>es necesario que el archivo CSS acabe en .module.css</b> en este ejemplo usamos "LoginUseEffect.module.css"

        Le ponemos nombre a la variable que lo importa y la usamos en nuestro HTML.<br/><br/>
        
        Inspecciona el código del proyecto para ver como se aplican los estilos modulares.<br/><br/>
      </p>
      <LoginUseEffect />
      <pre className="border border-dark bg-light my-5">
        Para usar el moduleCSS nuestro archivo CSS tiene que terminar en .module.css<br/>
        <b>import classes from './LoginUseEffect.module.css';</b><br/><br/>
        &lt;form onSubmit=submitHandler className=<b>classes.login</b>&gt;<br/>
        &nbsp;&lt;div<br/>
        &nbsp;&nbsp;className=`<b>$classes.control</b> $<br/>
        &nbsp;&nbsp;&nbsp;emailIsValid === false ? <b>classes.invalid</b> : ''<br/>
        &nbsp;&nbsp;`<br/>
        &nbsp;&gt;<br/>
        &nbsp;&nbsp;&lt;label htmlFor="email"&gt;E-Mail&lt;/label&gt;<br/>
        &nbsp;&nbsp;&lt;input<br/>
        &nbsp;&nbsp;&nbsp;type="email"<br/>
        &nbsp;&nbsp;&nbsp;id="email"<br/>
        &nbsp;&nbsp;&nbsp;value=enteredEmail<br/>
        &nbsp;&nbsp;&nbsp;onChange=emailChangeHandler<br/>
        &nbsp;&nbsp;&nbsp;onBlur=validateEmailHandler<br/>
        &nbsp;&nbsp;/&gt;<br/>
        &nbsp;&lt;/div&gt;<br/>
        &nbsp;&lt;div<br/>
        &nbsp;&nbsp;className=`<b>$classes.control</b> $<br/>
        &nbsp;&nbsp;&nbsp;passwordIsValid === false ? <b>classes.invalid</b> : ''<br/>
        &nbsp;&nbsp;`<br/>
        &nbsp;&gt;<br/>
        &nbsp;&nbsp;&lt;label htmlFor="password"&gt;Password&lt;/label&gt;<br/>
        &nbsp;&nbsp;&lt;input<br/>
        &nbsp;&nbsp;&nbsp;type="password"<br/>
        &nbsp;&nbsp;&nbsp;id="password"<br/>
        &nbsp;&nbsp;&nbsp;value=enteredPassword<br/>
        &nbsp;&nbsp;&nbsp;onChange=passwordChangeHandler<br/>
        &nbsp;&nbsp;&nbsp;onBlur=validatePasswordHandler<br/>
        &nbsp;&nbsp;/&gt;<br/>
        &nbsp;&lt;/div&gt;<br/>
        &nbsp;&lt;div className=<b>classes.actions</b>&gt;<br/>
        &nbsp;&nbsp;&lt;button type="submit" className=<b>classes.button</b> disabled=!formIsValid&gt;<br/>
        &nbsp;&nbsp;&nbsp;Login<br/>
        &nbsp;&nbsp;&lt;/button&gt;<br/>
        &nbsp;&lt;/div&gt;<br/>
        &lt;/form&gt;<br/>
      </pre>
    </>
  )
}

export default ModuleCSSPage