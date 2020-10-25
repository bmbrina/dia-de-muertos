import React from 'react'
import Hero from './Hero'
import Footer from './Footer'
import '../styles/index.scss'
import Altar from './Altar'
import BackgroundBanners from './BackgroundBanners'

const App = () => {
  return (
    <div className="app">
      <BackgroundBanners />
      <Hero />
      <Altar />
      <Footer />
    </div>
  )
}

export default App
