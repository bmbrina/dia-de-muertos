import React, { useContext } from 'react'
import Banners from '../Banners'
import data from '../../data/app.json'
import Title from '../../images/title.svg'
import Separator from '../../images/separator.svg'
import { AppContext } from '../../context/AppContext'

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

const Hero = () => {
  const { elementsRefs } = useContext(AppContext)
  const { hero } = data
  const { title, subtitle, description } = hero

  return (
    <section className="hero">
      <Banners />
      <div className="hero__container container">
        <h1>
          <img className="hero__title" src={Title} alt={title} />
          <span className="visually-hidden">{title}</span>
        </h1>
        <h2 className="hero__subtitle">{subtitle}</h2>
        <img className="hero__separator" src={Separator} alt="" />
        <div className="hero__description">
          <p className="hero__description-title">{description.title}</p>
          {description.text.map((item, index) => (
            <p className="hero__description-text" key={index}>
              {item}
            </p>
          ))}
        </div>
        <i
          className="icon icon--arrow bounce"
          onClick={() => scrollToRef(elementsRefs.altar)}
          onKeyPress={() => scrollToRef(elementsRefs.altar)}
          role="button"
          tabIndex="0"
        >
          <span className="visually-hidden">Scroll To Altar</span>
        </i>
      </div>
    </section>
  )
}

export default Hero
