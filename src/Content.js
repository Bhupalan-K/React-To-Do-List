import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items, check, deleteButton}) => {

  return (
    <>
      {items.length ? (
        <ItemsList 
         items = {items}
         check = {check}
         deleteButton = {deleteButton}
        /> 
      ) : (<h2>Your List is Empty</h2>)}
    </>
  )
}

export default Content