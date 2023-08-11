import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"


const SimpleLinksPage = () => {
  const {t} = useTranslation(["pages"])
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">{t('libraries.routerDom.simpleRoutes.title')}</h1>
      <p className="alert alert-secondary" dangerouslySetInnerHTML={{__html: t('libraries.routerDom.simpleRoutes.infoBox')}} />
  
      <ul>
        <li>
          <Link to="/librerias/router-dom/simple-links/link-example-a">{t('libraries.routerDom.simpleRoutes.linkExample')} A</Link>
        </li>
        <li>
          <Link to="/librerias/router-dom/simple-links/link-example-b">{t('libraries.routerDom.simpleRoutes.linkExample')} B</Link>
        </li>
      </ul>

      <pre className="border border-dark bg-light my-5">
        &lt;ul&gt;<br/>
        &nbsp;&lt;li &gt;<br/>
        &nbsp;&nbsp;&lt;Link to="/links/link-example-a"&gt;{t('libraries.routerDom.simpleRoutes.linkExample')} A&lt;/Link&gt;<br/>
        &nbsp;&lt;/li&gt;<br/>
        &nbsp;&lt;li &gt;<br/>
        &nbsp;&nbsp;&lt;Link to="/links/link-example-b"&gt;{t('libraries.routerDom.simpleRoutes.linkExample')} B&lt;/Link&gt;<br/>
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

export default SimpleLinksPage
