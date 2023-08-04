import React, { useContext, useEffect } from "react";
import ImagesContext from "context/ImagesContext";
import ListOfImages from "components/ListOfImages";
import getImages from "services/getImages";
import ImagesContex from "context/ImagesContext";
import SearchImages from "components/SearchImages";
import { useLocation } from "react-router-dom";

export default function DynamicLinksPage() {
  const staticConfig =  useContext(ImagesContext)
  console.log(staticConfig)

  const {images, setImages, setGaleriaURL} = useContext(ImagesContex)
  const urlLocation = useLocation().pathname

  useEffect(function() {
    setImages(getImages())
    setGaleriaURL(urlLocation)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlLocation])



  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">Rutas dinámicas</h1>
      <p className="alert alert-secondary">


        Estamos aprovechando este ejemplo para añadir un buscador y navegar atraves del boton a la imagen indicada en el fomulario, a su vez tambien se añaden <strong>URLs dinámicas</strong> en el <strong>App.js</strong><br/><br/>
        Como se puede apreciar en el código la parte dinamica será indicada por dos puntos mas el nombre que queramos ponerle en la parte dinámica.
      </p>
      <SearchImages/>
      <ListOfImages gifs={images}/>
      <pre className="border border-dark bg-light my-5">
          &nbsp;&lt;Routes&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/' element=&lt;Home /&gt; /&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/links' element=&lt;Links/&gt; /&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/context' element=&lt;ContextPage/&gt; /&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/links/link-example-a' element=&lt;LinkExampleA/&gt; /&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/links/link-example-b' element=&lt;LinkExampleB/&gt; /&gt;<br/>
          &nbsp;&nbsp;&lt;Route <b>path='/image/:id'</b> element=&lt;ImageDetail/&gt; /&gt;<br/>
          &nbsp;&lt;/Routes&gt;<br/>
      </pre>
    </>
  )
}


