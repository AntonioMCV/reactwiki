import React from 'react'
import Image from '../Image'
import './ListOfImages.css'
import { useTranslation } from "react-i18next"

export default function ListOfImages ({gifs}) {
  const {t} = useTranslation(["components"])
  return (
    <>
      <h2 className="mb-4">{t('ListOfImages.title')}</h2>
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