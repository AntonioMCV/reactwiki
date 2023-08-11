import React, { useCallback, useState, useMemo } from "react";
import RendimientoHijo from "./RendimientoHijo";
import { useTranslation } from "react-i18next"

export default function RendimientoPadre() {
  console.log("COMPONENTE PADRE RENDER!");
  const {t} = useTranslation(["components"])

  const [keyWord, setKeyWord] = useState("");
  const [nombreHijo, setNombreHijo] = useState(t('RendimientoPadreEHijo.son'));
  const [nombrePadre, setNombrePadre] = useState(t('RendimientoPadreEHijo.parent'));

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
        <h2 className="mb-4">{t('RendimientoPadreEHijo.component')} {nombrePadre}</h2>
        <form onSubmit={handleSubmit}>
          <div className="row align-items-end mb-4">
            <div className="col">
              <label className="form-label">
              {t('RendimientoPadreEHijo.writeToRender')} {t('RendimientoPadreEHijo.parent')}
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
                {t('RendimientoPadreEHijo.changeNameOf')} {t('RendimientoPadreEHijo.son')}
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
