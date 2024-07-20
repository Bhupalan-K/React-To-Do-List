import React from 'react'

const Header = ({title = "Title"}) => {
  return (
    <header>
        <h2>{title}</h2> 
    </header>
  )
}

export default Header