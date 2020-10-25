import React from 'react'
import Banner from '../../images/banner.svg'
import Banner2 from '../../images/banner-2.svg'

const BackgroundBanners = () => {
  return (
    <div>
      <img className="background-banner" src={Banner2} alt="" />
      <img className="background-banner" src={Banner} alt="" />
    </div>
  )
}

export default BackgroundBanners
