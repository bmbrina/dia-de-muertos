import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import '../styles/index.scss'
import Altar from './Altar'

const App = () => {
  return (
    <div className="app">
      <Hero />
      <Altar />
      <Footer />
    </div>
  )
}

export default App
