import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItems = ({ check, deleteButton, item, }) => {
  return (
    <main className='contents'>
      <div className='items-div'>
      <li key={item.id}>
        <label style={(item.checked) ? { textDecoration: "line-through" } : null}
          onDoubleClick={() => check(item.id)}>{item.activity}</label>
          <div className='check-trash'>
          <input
          className='checkbox'
          type="checkbox"
          onChange={() => check(item.id)}
          checked={item.checked}
        />
        <FaTrashAlt
         className='trash-icon'
          onClick={() => deleteButton(item.id)}
          role="button"
          tabIndex="0"
        // aria-label={'Delete ${item.activity}'}
        />
        </div>
      </li>
      </div>
    </main>
  )
}

export default LineItems