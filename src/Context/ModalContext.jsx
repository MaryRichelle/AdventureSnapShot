import React, { useState , createContext } from 'react'


export const ModelSelected = createContext()

const ModalContext = ({children}) => {
  const [selected, setSelected] = useState(null)

const value ={
  selected, setSelected

}
  return (
    <ModelSelected.Provider value={value}>{children}</ModelSelected.Provider>
  )
}

export default ModalContext