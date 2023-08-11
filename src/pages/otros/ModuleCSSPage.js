import LoginUseEffect from 'components/LoginUseEffect'
import { useTranslation } from "react-i18next"


const ModuleCSSPage = () => {
  const {t} = useTranslation(["pages"])
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">{t('others.moduleCSS.title')}</h1>
      <p className="alert alert-secondary" dangerouslySetInnerHTML={{__html: t('others.moduleCSS.infoBox')}} />

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