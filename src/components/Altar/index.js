import React, { useContext, useEffect, useRef } from 'react'
import { AppContext } from '../../context/AppContext'
import Item from './Item'
import AltarSvg from '../../images/altar.svg'
import data from '../../data/app.json'

const Altar = () => {
  const altarRef = useRef(null)
  const { items, selectedItem, appendElementRef, setItems, setSelectedItem } = useContext(
    AppContext
  )
  const seletedItemIndex = items.indexOf(selectedItem)
  const { altar } = data
  const { elements } = altar
  const changeItem = (direction) => {
    const newIndex = direction === 'left' ? seletedItemIndex - 1 : seletedItemIndex + 1
    setSelectedItem(items[newIndex])
  }

  useEffect(() => {
    setItems(Object.keys(elements))
    appendElementRef({ altar: altarRef })
  }, [elements, setItems])

  return (
    <section className="altar" ref={altarRef}>
      <div className="altar__container container">
        <div className="altar__illustration">
          <img src={AltarSvg} alt="" />
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
