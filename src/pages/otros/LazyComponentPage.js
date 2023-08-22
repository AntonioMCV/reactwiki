import React from "react";
import LazyComponentToLoad from "components/LazyComponent";
import { useTranslation } from "react-i18next"


export default function LazyComponentPage () {
  const {t} = useTranslation(["pages"])
  return (
    <>
      <h1 className="bg-dark text-white text-center my-4 py-4">
        {t('others.lazyComponent.title')}
      </h1>
      <p className="alert alert-secondary" dangerouslySetInnerHTML={{__html: t('others.lazyComponent.infoBox')}} />
      <div className="bg-dark text-white text-center my-4 py-4" style={{ height: '200vh'}}>
        <h1 className="text-center mt-5 pt-5">{t('others.lazyComponent.ScrollDownToLoad')}</h1>
      </div>
      <LazyComponentToLoad/>
    </>
  )
}
