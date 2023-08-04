import React from "react";
import { Link } from "react-router-dom";

const LinkExampleB = () => {
  return (
    <>
      <h1>LinkExample B</h1>
      <ul>
        <li>
          <Link to="/librerias/router-dom/simple-links">Links</Link>
        </li>
        <li>
          <Link to="/librerias/router-dom/simple-links/link-example-a">Link example A</Link>
        </li>
        <li>
          <Link to="/librerias/router-dom/simple-links/link-example-b">Link example B</Link>
        </li>
      </ul>
    </>
  )
}

export default LinkExampleB