import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchImages() {

  const [keyWord, setKeyWord] = useState('')
  const navigate = useNavigate()


  const handleSubmit = (evt) => {
    evt.preventDefault()
    navigate(`/image/${keyWord}`);
  }

  const handleChange = (evt) => {
    setKeyWord(evt.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row align-items-end mb-4">
          <div className="col">
              <label className="form-label">Escribe el id de la imágen para acceder</label>
              <input className="form-control" type="text" onChange={handleChange} value={keyWord}/>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary">Enviar</button>
          </div>
        </div>
      </form>
    </>
  )
}


