import React from 'react'
import data from '../../data/app.json'
import Title from '../../images/title.svg'

const Hero = () => {
  const { hero } = data
  const { title, subtitle, description } = hero

  return (
    <section className="hero">
      <div className="hero__container container">
        <h1>
          <img className="hero__title" src={Title} alt={title} />
          <span className="visually-hidden">{title}</span>
        </h1>
        <h2 className="hero__subtitle">{subtitle}</h2>
        <hr className="hero__separator" />
        <div className="hero__description">
          <p className="hero__description-title">{description.title}</p>
          {description.text.map((item, index) => (
            <p className="hero__description-text" key={index}>
              {item}
            </p>
          ))}
        </div>
        <i className="icon icon--arrow bounce" />
      </div>
    </section>
  )
}

export default Hero
