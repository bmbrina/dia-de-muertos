import React from 'react'
import svg from '../../images/elements.svg'

const Item = ({ name, description, itemId }) => {
  return (
    <div className="item">
      <p className="item__name">{name}</p>
      {description.map((desc, index) => (
        <p className="item__desc" key={index} dangerouslySetInnerHTML={{ __html: desc }} />
      ))}
      {itemId !== 'altar' && (
        <svg className={`item__icon item__icon--${itemId}`}>
          <use xlinkHref={`${svg}#${itemId}`} />
        </svg>
      )}
    </div>
  )
}

export default Item
