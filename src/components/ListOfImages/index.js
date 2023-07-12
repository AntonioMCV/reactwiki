import React from 'react'
import Image from '../Image'
import './ListOfImages.css'

export default function ListOfImages ({gifs}) {
  return (
    <>
      <h2 className="mb-4">Galería de imágenes</h2>
      <div className='ListOfImages'>
        {
          gifs.map(({id, title, url}) =>
            <Image
              id={id}
              key={id}
              title={title}
              url={url}
            />
          )
        }
      </div>
    </>
  )
}