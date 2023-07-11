import React from "react";
import { Link } from "react-router-dom";

const LinkExampleA = () => {
  return (
    <>
      <h1>LinkExample A</h1>
      <ul>
        <li>
          <Link to="/links">Links</Link>
        </li>
        <li>
          <Link to="/links/link-example-a">Link example A</Link>
        </li>
        <li>
          <Link to="/links/link-example-b">Link example B</Link>
        </li>
      </ul>
    </>
  )
}

export default LinkExampleA