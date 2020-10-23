import React, { createContext, useState } from 'react'

const AppContext = createContext()
const AppCtxProvider = AppContext.Provider

const AppProvider = ({ children }) => {
  const [greeting, setGreeting] = useState('World')
  return (
    <AppCtxProvider
      value={{
        greeting,
        setGreeting
      }}
    >
      {children}
    </AppCtxProvider>
  )
}

export { AppContext }
export default AppProvider
