import React from 'react'
import { useRef } from 'react'

const AddItem = ({newItem, setNewItem, handleSubmit, addRef, removeAddItem, searchRef}) => {

  const inputRef = useRef();
  return (
    <>
    <main className='formContainer' ref={addRef}>
    <form  className='addform' onSubmit={handleSubmit}>
        <div className="input-button">
        <textarea 
        ref={inputRef}
        autoFocus
        id='addItemid'
        type='text'
        placeholder='add item'
        required
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        />
        <div className="button-div">
        <button
        onClick={() => inputRef.current.focus()}
        type='submit'
        >
            Add
        </button>
        <button
              className='cancel'
              onClick={() => {
                searchRef.current.focus();
                removeAddItem();
              }}
              type='button'
            >
              Cancel
            </button>
        </div>
        </div>
    </form>
    </main>
    </>
  )
}

export default AddItem