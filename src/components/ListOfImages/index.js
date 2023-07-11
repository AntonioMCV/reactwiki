import React from 'react'
import Image from '../Image'
import './ListOfImages.css'

export default function ListOfImages ({gifs}) {
  return <div className='ListOfImages'>
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
}