import React, { memo, useCallback, useState } from "react";

function RendimientoHijo ({changeName, cambiarNombrePadre}) {

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
        <h2 className="mb-4">Componente {changeName}</h2>
        <form onSubmit={handleSubmit}>
          <div className="row align-items-end mb-4">
            <div className="col">
                <label className="form-label">Escribe para volver a renderizar el componente hijo</label>
                <input className="form-control" type="text" onChange={handleChange} value={keyWord}/>
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">Cambiar el nombre del padre</button>
            </div>
          </div>
        </form>
      </div>
  </>
}

export default memo(RendimientoHijo)