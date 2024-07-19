import React from 'react'
import LineItems from './LineItems';

const ItemsList = ({items, check, deleteButton}) => {
  return (
    <ul>
          {items.map((item) => (
            <LineItems
            item = {item}
            key={item.task}
            check = {check}
            deleteButton = {deleteButton}
            />
          ))}
        </ul>
  )
}
export default ItemsList