/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
          <li className="nav-item dropup">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                React Hooks
              </a>
              <ul className="dropdown-menu dropdown">
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
            <li className="nav-item dropup">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Links
              </a>
              <ul className="dropdown-menu dropdown">
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

export default Footer