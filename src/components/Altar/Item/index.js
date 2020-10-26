import React, { useState } from 'react'
import svg from '../../../images/elements.svg'
import ColorPicker from '../../ColorPicker'
import Banner from '../Banner'
import data from '../../../data/app.json'

const Item = ({ name, description, colors, itemId }) => {
  const { bannerColors } = data
  const [selectedColor, setSelectedColor] = useState('red')
  return (
    <div className="altar__item">
      <p className="altar__item-name">{name}</p>
      {description.map((desc, index) => (
        <p className="altar__item-desc" key={index} dangerouslySetInnerHTML={{ __html: desc }} />
      ))}
      {itemId === 'banner' && (
        <p className="altar__item-desc">
          <span style={{ color: bannerColors[selectedColor] }}>{selectedColor}: </span>
          {colors[selectedColor]}
        </p>
      )}
      {itemId === 'banner' && (
        <ColorPicker
          colors={bannerColors}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      )}
      {itemId === 'banner' && <Banner color={bannerColors[selectedColor]} />}
      {(itemId !== 'altar' || itemId !== 'banner') && (
        <svg className={`altar__item-icon altar__item-icon--${itemId}`}>
          <use xlinkHref={`${svg}#${itemId}`} />
        </svg>
      )}
    </div>
  )
}

export default Item
