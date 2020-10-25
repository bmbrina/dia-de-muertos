import React, { createContext, useState } from 'react'

const AppContext = createContext()
const AppCtxProvider = AppContext.Provider

const AppProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [selectedItem, setSelectedItem] = useState('altar')
  return (
    <AppCtxProvider
      value={{
        items,
        selectedItem,
        setItems,
        setSelectedItem
      }}
    >
      {children}
    </AppCtxProvider>
  )
}

export { AppContext }
export default AppProvider
