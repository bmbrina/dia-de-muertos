import React from 'react'

const ColorPicker = ({ colors, selectedColor, setSelectedColor }) => {
  return (
    <div className="color-picker">
      <ul className="color-picker__list">
        {Object.keys(colors).map((color) => (
          <li
            className={`color-picker__item ${selectedColor === color ? 'selected' : ''}`}
            key={color}
            style={{ backgroundColor: colors[color] }}
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
            role="button"
            tabIndex="0"
            onClick={() => setSelectedColor(color)}
            onKeyPress={() => setSelectedColor(color)}
          >
            <span className="visually-hidden">{color}</span>
          </li>
        ))}
      </ul>
      <p className="color-picker__text">Choose a color</p>
    </div>
  )
}

export default ColorPicker
