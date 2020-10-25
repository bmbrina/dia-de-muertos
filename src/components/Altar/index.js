import React, { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import Item from './Item'
import data from '../../data/app.json'

const Altar = () => {
  const { items, selectedItem, setItems, setSelectedItem } = useContext(AppContext)
  const seletedItemIndex = items.indexOf(selectedItem)
  const { altar } = data
  const { elements } = altar
  const changeItem = (direction) => {
    const newIndex = direction === 'left' ? seletedItemIndex - 1 : seletedItemIndex + 1
    setSelectedItem(items[newIndex])
  }

  useEffect(() => {
    setItems(Object.keys(elements))
  }, [elements, setItems])

  return (
    <section className="altar">
      <div className="altar__container container">
        <div className="altar__illustration">
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
