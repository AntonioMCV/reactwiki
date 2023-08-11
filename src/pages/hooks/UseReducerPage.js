import LoginUseReducer from 'components/LoginUseReducer'
import { useTranslation } from "react-i18next"


const UseReducerPage = () => {
  const {t} = useTranslation(["pages"])
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">{t('hooks.useReducer.title')}</h1>
      <p className="alert alert-secondary">
        <span dangerouslySetInnerHTML={{__html: t('hooks.useReducer.infoBox1st')}} />
        <img loading='lazy' alt='' className="d-block mx-auto my-4" src='/schemeReducer.png' /><br/>
        <span dangerouslySetInnerHTML={{__html: t('hooks.useReducer.infoBox2nd')}} />
      </p>
      
      <LoginUseReducer />
    </>
  )
}

export default UseReducerPage