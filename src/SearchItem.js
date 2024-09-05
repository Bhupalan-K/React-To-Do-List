import React from 'react';
import { FaPlus } from 'react-icons/fa';

const SearchItem = ({ search, setSearch, addAddItem, searchRef }) => {


  return (
    <main className="search">
      <form className='searchform' onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchRef}
          type='text'
          id='searchitem'
          placeholder='search'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <FaPlus className='add-symbol' onClick={addAddItem} />
    </main>
  )
}

export default SearchItem