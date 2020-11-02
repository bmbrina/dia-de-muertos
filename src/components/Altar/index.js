import React, { useContext, useEffect, useRef, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import Item from './Item'
import data from '../../data/app.json'
import Illustration from './Illustration'

const Altar = () => {
  const altarRef = useRef(null)
  const { items, selectedItem, appendElementRef, setItems, setSelectedItem } = useContext(
    AppContext
  )
  const seletedItemIndex = items.indexOf(selectedItem)
  const { altar } = data
  const { elements } = altar
  const [visible, setVisible] = useState(false)
  const changeItem = (direction) => {
    const newIndex = direction === 'left' ? seletedItemIndex - 1 : seletedItemIndex + 1
    setSelectedItem(items[newIndex])
  }

  const isAltarInViewport = () => {
    const { top } = altarRef.current.getBoundingClientRect()
    const isVisible = top >= 0 && top <= window.innerHeight
    if (isVisible) {
      setVisible(true)
      window.removeEventListener('scroll', isAltarInViewport)
    }
  }

  useEffect(() => {
    setItems(Object.keys(elements))
    appendElementRef({ altar: altarRef })
    window.addEventListener('scroll', isAltarInViewport)
  }, [elements, setItems])

  return (
    <section className={`altar${visible ? ' animated' : ''}`} ref={altarRef}>
      <div className="altar__container container">
        <div className="altar__illustration">
          <Illustration selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
          <p className="altar__instruction">{altar.instruction}</p>
        </div>
        <div className="altar__box">
          <i
            className={`icon icon--arrow icon--arrow-left ${
              seletedItemIndex === 0 ? 'visually-hidden' : ''
            }`}
            onClick={() => changeItem('left')}
            onKeyPress={() => changeItem('left')}
            role="button"
            tabIndex="0"
          >
            <span className="visually-hidden">Left</span>
          </i>
          <Item {...elements[selectedItem]} itemId={selectedItem} />
          <i
            className={`icon icon--arrow icon--arrow-right ${
              seletedItemIndex === items.length - 1 ? 'visually-hidden' : ''
            }`}
            onClick={() => changeItem('right')}
            onKeyPress={() => changeItem('right')}
            role="button"
            tabIndex="0"
          >
            <span className="visually-hidden">Right</span>
          </i>
        </div>
      </div>
    </section>
  )
}

export default Altar
