import React from "react";
import RendimientoPadre from "components/Rendimiento/RendimientoPadre";
import { useTranslation } from "react-i18next"


export default function UseMemoPageUseCallback () {
  const {t} = useTranslation(["pages"])

  return <>
      <h1 className="bg-dark text-white text-center my-4 py-4">{t('hooks.useMemoAndUseCallback.title')}</h1>
      <p className="alert alert-secondary" dangerouslySetInnerHTML={{__html: t('hooks.useMemoAndUseCallback.infoBox')}} />
      <RendimientoPadre/>
  </>
}