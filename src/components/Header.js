import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar navbar-dark bg-dark">
      <div className="container-md">
        <Link className="navbar-brand" to="/">React Wiki</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/use-effect">useEffect & ModuleCSS</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/links">Links</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/context">Contextos Rutas dinámicas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/lazy-component">Lazy Component</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rendimiento">Rendimiento</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
