import React from 'react'

const Header = ({title = "Title"}) => {
  return (
    <header>
        <h2>{title}</h2> 
    </header>
  )
}

// Header.defaultProps = {
//   title : "to do list"
// }
export default Header