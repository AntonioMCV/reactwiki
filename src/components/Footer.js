import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/links">Links</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/provider">Provider</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/test2">test2</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rutas">Rutas dinamicas</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Footer