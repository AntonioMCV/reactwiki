/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const [showMenuResponsive, setShowMenuResponsive] = useState(false)
  const hamburguerClickHandler = () => setShowMenuResponsive(prevState => !prevState)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-md">
        <Link className="navbar-brand" to="/">React Wiki</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" onClick={hamburguerClickHandler}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${showMenuResponsive? 'show':''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                React Hooks
              </a>
              <ul className="dropdown-menu">
                <li>
                 <Link className="dropdown-item" to="/use-effect">useEffect & ModuleCSS</Link>
                </li>
                <li>
                 <Link className="dropdown-item" to="/use-reducer">useReducer</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/use-memo-use-callback">useMemo y useCallback</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Links
              </a>
              <ul className="dropdown-menu">
                <li>
                 <Link className="dropdown-item" to="/links">Enlaces simples</Link>
                </li>
                <li>
                 <Link className="dropdown-item" to="/context">Contextos Rutas dinámicas</Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lazy-component">Lazy Component</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
