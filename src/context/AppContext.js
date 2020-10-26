import React, { createContext, useState } from 'react'

const AppContext = createContext()
const AppCtxProvider = AppContext.Provider

const AppProvider = ({ children }) => {
  const [elementsRefs, setElementsRefs] = useState({})
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState('altar')
  const [selectedColor, setSelectedColor] = useState('red')
  const appendElementRef = (ref) => {
    setElementsRefs({ ...elementsRefs, ...ref })
  }
  return (
    <AppCtxProvider
      value={{
        elementsRefs,
        items,
        selectedItem,
        selectedColor,
        appendElementRef,
        setItems,
        setSelectedItem,
        setSelectedColor
      }}
    >
      {children}
    </AppCtxProvider>
  )
}

export { AppContext }
export default AppProvider
