import React, { useContext } from "react";
import Image from 'components/Image'
import ImagesContext  from "context/ImagesContext";
import { useParams } from "react-router-dom";
import SearchImages from "components/SearchImages";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"


export default function DynamicLinkDetailPage () {
  const {t} = useTranslation(["pages"])
  const {id} = useParams()
  const {images, galeriaURL} = useContext(ImagesContext)
  console.log({images})
  console.log(id)
  const image = images.find(singleImage => singleImage.id === id) 
  console.log(image)
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">
        {t('libraries.routerDom.dynamicRoutesDetail.title')}
      </h1>
      <p className="alert alert-secondary" dangerouslySetInnerHTML={{__html: t('libraries.routerDom.dynamicRoutesDetail.infoBox')}} />
      <SearchImages/>
      {galeriaURL.length && <Link to={galeriaURL}>{t('libraries.routerDom.dynamicRoutesDetail.returnPage')}</Link>}
      <h2 className="mb-4">{t('libraries.routerDom.dynamicRoutesDetail.imageDetail')}</h2>
      {
        image?
          <Image
            id={id}
            key={id}
            title={image.title}
            url={image.url}
          />
        :
          <h2 className="my-5">{t('libraries.routerDom.dynamicRoutesDetail.imageNoFound')}</h2>
      }
    </>
  )
}
