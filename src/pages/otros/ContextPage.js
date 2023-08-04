import React, { useContext, useEffect } from "react";
import ImagesContext from "context/ImagesContext";
import ListOfImages from "components/ListOfImages";
import getImages from "services/getImages";
import ImagesContex from "context/ImagesContext";
import SearchImages from "components/SearchImages";
import { useLocation } from "react-router-dom";

export default function ContextPage() {
  const staticConfig =  useContext(ImagesContext)
  console.log(staticConfig)

  const {images, setImages, setGaleriaURL} = useContext(ImagesContex)
  const urlLocation = useLocation().pathname

  useEffect(function() {
    setImages(getImages())
    setGaleriaURL(urlLocation)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">Contextos</h1>
      <p className="alert alert-secondary">
        Con el <strong>Context provider</strong> puedo tener valores guardados y cambiar su estado entre multiples componentes sin tener que pasarles propiedades. Parecido al famoso Redux.<br/><br/>
        En este ejemplo estamos usando el context provider comnbinado con el useState para guardar la informacion de las imagenes, así al irnos a su detalle no volveremos hacer una llamada a la API para renderizarlas ya que tendremos ya guardado un contexto global para consultarlo.<br/><br/>

        Como se puede apreciar en el código el contexto tiene que envolver todos los componentes donde se quiera leer
      </p>
      <SearchImages/>
      <ListOfImages gifs={images}/>
      <pre className="border border-dark bg-light my-5">
          <b>&lt;ImagesContextProvider&gt;</b><br/>
          &nbsp;&lt;Routes&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/' element=&lt;Home /&gt; /&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/links' element=&lt;Links/&gt; /&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/context' element=&lt;ContextPage/&gt; /&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/links/link-example-a' element=&lt;LinkExampleA/&gt; /&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/links/link-example-b' element=&lt;LinkExampleB/&gt; /&gt;<br/>
          &nbsp;&nbsp;&lt;Route path='/image/:id' element=&lt;ImageDetail/&gt; /&gt;<br/>
          &nbsp;&lt;/Routes&gt;<br/>
          <b>&lt;/ImagesContextProvider&gt;</b>
      </pre>
    </>
  )
}


