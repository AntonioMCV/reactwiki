/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"

const Footer = () => {
  const {t, i18n} = useTranslation(["navigation"])

  const changeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en'? 'es' : 'en')
  }

  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropup">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('reactHooks')}
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                 <Link className="dropdown-item" to="/hooks/use-effect">{t('useEffect')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/hooks/use-memo-use-callback">{t('useMemoAndUseCallback')}</Link>
                </li>
                <li>
                 <Link className="dropdown-item" to="/hooks/use-reducer">{t('useReducer')}</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropup">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('libraries')}
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li className="dropdown-item active">
                  {t('redux')}
                </li>
                <li>
                  <Link className="dropdown-item" to="librerias/redux/basico">{t('reduxBasic')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="librerias/redux/toolkit">{t('reduxToolkit')}</Link>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li className="dropdown-item active">
                  {t('routerDom')}
                </li>
                <li>
                  <Link className="dropdown-item" to="/librerias/router-dom/dynamic-links">{t('dynamicRoutes')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/librerias/router-dom/simple-links">{t('simpleRoutes')}</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropup">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('others')}
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                  <Link className="dropdown-item" to="/otros/apis">{t('apis')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/otros/context">{t('contexts')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/otros/module-css">{t('moduleCSS')}</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/otros/lazy-component">{t('lazyComponent')}</Link>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropup">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {t('language')}: {i18n.language}
              </a>
              <ul className="dropdown-menu dropdown-menu-dark">
                <li>
                 <button className="dropdown-item" onClick={changeLanguage}>{i18n.language === 'en'? 'es' : 'en'}</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Footer