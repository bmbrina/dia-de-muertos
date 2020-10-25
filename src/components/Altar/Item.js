import React from 'react'
import svg from '../../images/elements.svg'
import Banner from './Banner'

const Item = ({ name, description, itemId }) => {
  return (
    <div className="altar__item">
      <p className="altar__item-name">{name}</p>
      {description.map((desc, index) => (
        <p className="altar__item-desc" key={index} dangerouslySetInnerHTML={{ __html: desc }} />
      ))}
      {itemId === 'banner' && <Banner color="#D63453" />}
      {(itemId !== 'altar' || itemId !== 'banner') && (
        <svg className={`altar__item-icon altar__item-icon--${itemId}`}>
          <use xlinkHref={`${svg}#${itemId}`} />
        </svg>
      )}
    </div>
  )
}

export default Item
