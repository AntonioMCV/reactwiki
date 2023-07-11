import React from 'react'
import { Link } from 'react-router-dom'
import './Image.css'

export default function Image ({ title, id, url }) {
  return (
    <div className="Image">
      <div className="Image-buttons">
        <h2>{id}</h2>
      </div>
      <Link to={`/image/${id}`} className='Image-link'>
        <h4>{title}</h4>
        <img loading='lazy' alt={title} src={url} />
      </Link>
    </div>

  )
}