import React from 'react'
import Left from '../../images/banners/left.svg'
import Right from '../../images/banners/right.svg'

const Banners = () => {
  return (
    <div className="banners">
      <img className="banner banner--right" src={Right} alt="" />
      <img className="banner banner--left" src={Left} alt="" />
    </div>
  )
}

export default Banners
