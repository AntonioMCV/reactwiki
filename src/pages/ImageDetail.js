import React, { useContext } from "react";
import Image from '../components/Image'
import ImagesContext  from "../context/ImagesContext";
import { useParams } from "react-router-dom";
import SearchImages from "../components/SearchImages";

export default function ImageDetail () {
  const {id} = useParams()
  const {images} = useContext(ImagesContext)
  console.log({images})
  console.log(id)
  const image = images.find(singleImage => singleImage.id === id) 
  console.log(image)
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">
        Image Detail
      </h1>
      <p className="alert alert-secondary">
        Podemos ver como le hemos pasado la propiedad por contexto y no hemos vuelto a hacer una llamada para la carga de la imagen.<br/><br/>
        Hemos utilizado tambien el <strong>useParams</strong> de react-router-dom, para que mediante el parametro dinamico de la URL mostremos la imagen que nos interesa del listado que habiamos cargado previamente.
      </p>
      <SearchImages/>
      {
        image?
          <Image
            id={id}
            key={id}
            title={image.title}
            url={image.url}
          />
        :
          <h2 className="my-5">Imagen no encontrada, por favor busque un id de imagen existente.</h2>
      }
    </>
  )
}
