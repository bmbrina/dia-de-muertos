import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Hero = () => {
  const { greeting } = useContext(AppContext)
  return <section className="hero">Hello {greeting}!</section>
}

export default Hero
