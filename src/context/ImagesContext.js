import React, { useState } from "react";

const Context = React.createContext({})

export function ImagesContextProvider({children}) {
  const [images, setImages] = useState([])
  const [galeriaURL, setGaleriaURL] = useState([])
  return (
    <Context.Provider value={{ images, setImages, galeriaURL, setGaleriaURL }}>
      {children}
    </Context.Provider>
  )
}

export default Context