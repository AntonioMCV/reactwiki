import React, { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next"

function RendimientoHijo ({changeName, cambiarNombrePadre, exampleArray}) {
  console.log('COMPONENTE HIJO RENDER!');
  const {t} = useTranslation(["components"])

  const [keyWord, setKeyWord] = useState('')

  const handleSubmit = (evt) => {
    evt.preventDefault()
    cambiarNombrePadre(keyWord)
  }

  const handleChange = useCallback((evt) => {
    setKeyWord(evt.target.value)
  }, [])

  return <>
      <div className="border border-black p-5">
        <h2 className="mb-4">{t('RendimientoPadreEHijo.component')} {changeName}</h2>
        <form onSubmit={handleSubmit}>
          <div className="row align-items-end mb-4">
            <div className="col">
                <label className="form-label">{t('RendimientoPadreEHijo.writeToRender')} {t('RendimientoPadreEHijo.son')}</label>
                <input className="form-control" type="text" onChange={handleChange} value={keyWord}/>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">{t('RendimientoPadreEHijo.changeNameOf')} {t('RendimientoPadreEHijo.parent')}</button>
            </div>
          </div>
          <p>{t('RendimientoPadreEHijo.arrayExplicationProp')}</p>
          <ul>
            {exampleArray.map((number, i) => 
              <li key={i}>
                {number}
              </li>
            )}
          </ul>
        </form>
      </div>
  </>
}

export default memo(RendimientoHijo)