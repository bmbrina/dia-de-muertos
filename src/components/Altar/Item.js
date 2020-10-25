import React from 'react'
import svg from '../../images/elements.svg'
import Banner from './Banner'

const Item = ({ name, description, itemId }) => {
  return (
    <div className="item">
      <p className="item__name">{name}</p>
      {description.map((desc, index) => (
        <p className="item__desc" key={index} dangerouslySetInnerHTML={{ __html: desc }} />
      ))}
      {itemId === 'banner' && <Banner color="#D63453" />}
      {(itemId !== 'altar' || itemId !== 'banner') && (
        <svg className={`item__icon item__icon--${itemId}`}>
          <use xlinkHref={`${svg}#${itemId}`} />
        </svg>
      )}
    </div>
  )
}

export default Item
