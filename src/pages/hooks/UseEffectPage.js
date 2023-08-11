import LoginUseEffect from 'components/LoginUseEffect'
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

const UseEffectPage = () => {
  const {t} = useTranslation(["pages"])

  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">{t('hooks.useEffect.title')}</h1>
      <div className="alert alert-secondary">
        <span dangerouslySetInnerHTML={{__html: t('hooks.useEffect.infoBox')}} />
        {' '}<Link to="/hooks/use-reducer">useReducer</Link>.
      </div>
      <LoginUseEffect />
    </>
  )
}

export default UseEffectPage