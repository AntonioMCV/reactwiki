import { Link } from "react-router-dom";

const Links = () => {
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">Links</h1>
      <p className="alert alert-secondary">Usamos el paquete npm <strong>react-router-dom</strong> para poder utilizar las ventajas del single page application.<br/><br/> Se deberán importar los componentes necesarios <strong>Link, Routes y Route</strong>, siendo <strong>Routes</strong> el area donde se irán renderizando los componentes según su URL</p>
  
      <ul>
        <li>
          <Link to="/links/link-example-a">Link example A</Link>
        </li>
        <li>
          <Link to="/links/link-example-b">Link example B</Link>
        </li>
      </ul>

      <pre className="border border-dark bg-light my-5">
        &lt;ul&gt;<br/>
        &nbsp;&lt;li &gt;<br/>
        &nbsp;&nbsp;&lt;Link to="/links/link-example-a"&gt;Link example A&lt;/Link&gt;<br/>
        &nbsp;&lt;/li&gt;<br/>
        &nbsp;&lt;li &gt;<br/>
        &nbsp;&nbsp;&lt;Link to="/links/link-example-b"&gt;Link example B&lt;/Link&gt;<br/>
        &nbsp;&lt;/li&gt;<br/>
        &lt;/ul&gt;<br/>
        &lt;Routes&gt;<br/>
        &nbsp;&lt;Route path='/links/link-example-a' element=&lt;LinkExampleA /&gt; /&gt;<br/>
        &nbsp;&lt;Route path='/links/link-example-b' element=&lt;LinkExampleB /&gt; /&gt;<br/>
        &lt;/Routes&gt;<br/>
      </pre>
    </>
  )
}

export default Links
