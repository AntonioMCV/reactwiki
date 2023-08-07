import React, { useCallback, useState, useMemo } from "react";
import RendimientoHijo from "./RendimientoHijo";

export default function RendimientoPadre() {
  console.log("COMPONENTE PADRE RENDER!");

  const [keyWord, setKeyWord] = useState("");
  const [nombreHijo, setNombreHijo] = useState("hijo");
  const [nombrePadre, setNombrePadre] = useState("padre");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setNombreHijo(keyWord);
  };

  const handleChange = useCallback((evt) => {
    setKeyWord(evt.target.value);
  }, []);

  const cambiarNombrePadre = useCallback(
    (newName) => setNombrePadre(newName),
    []
  );

  const numbers = useMemo(() => [1, 2, 3, 4], []);

  return (
    <>
      <div className="border border-black p-5 mb-5">
        <h2 className="mb-4">Componente {nombrePadre}</h2>
        <form onSubmit={handleSubmit}>
          <div className="row align-items-end mb-4">
            <div className="col">
              <label className="form-label">
                Escribe para volver a renderizar el componente padre
              </label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                value={keyWord}
              />
            </div>
            <div className="col-auto">
              <button className="btn btn-primary">
                Cambiar el nombre del hijo
              </button>
            </div>
          </div>
        </form>
        <RendimientoHijo
          changeName={nombreHijo}
          cambiarNombrePadre={cambiarNombrePadre}
          exampleArray={numbers}
        />
      </div>
    </>
  );
}
