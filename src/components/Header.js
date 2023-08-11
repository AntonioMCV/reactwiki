/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"


const Header = () => {
  const [showMenuResponsive, setShowMenuResponsive] = useState(false)
  const hamburguerClickHandler = () => setShowMenuResponsive(prevState => !prevState)
  const {t, i18n} = useTranslation(["components"])

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en'? 'es' : 'en')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-md">
        <Link className="navbar-brand" to="/">React Wiki</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={hamburguerClickHandler}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse justify-content-between ${showMenuResponsive? 'show':''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('navigation.reactHooks')}
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                 <Link className="dropdown-item" to="/hooks/use-effect">{t('navigation.useEffect')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/hooks/use-memo-use-callback">{t('navigation.useMemoAndUseCallback')}</Link>
                </li>
                <li>
                 <Link className="dropdown-item" to="/hooks/use-reducer">{t('navigation.useReducer')}</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('navigation.libraries')}
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className="dropdown-item active">
                  {t('navigation.redux')}
                </li>
                <li>
                  <Link className="dropdown-item" to="librerias/redux/basico">{t('navigation.reduxBasic')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="librerias/redux/toolkit">{t('navigation.reduxToolkit')}</Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li className="dropdown-item active">
                  {t('navigation.routerDom')}
                </li>
                <li>
                  <Link className="dropdown-item" to="/librerias/router-dom/dynamic-links">{t('navigation.dynamicRoutes')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/librerias/router-dom/simple-links">{t('navigation.simpleRoutes')}</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('navigation.others')}
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/otros/apis">{t('navigation.apis')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/otros/context">{t('navigation.contexts')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/otros/module-css">{t('navigation.moduleCSS')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/otros/lazy-component">{t('navigation.lazyComponent')}</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('navigation.language')}: {i18n.language.toUpperCase()}
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                 <button className="dropdown-item" onClick={changeLanguage}>{i18n.language === 'en'? 'ES' : 'EN'}</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
