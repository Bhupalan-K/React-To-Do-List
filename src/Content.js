import React from 'react'
import ItemsList from './ItemsList';

const Content = ({items, check, deleteButton}) => {
  // const random = () => {
  //     const arr = ["earn", "grow", "get", "have"];
  //     const int = Math.floor(Math.random()*4);
  //     return arr[int];
  // }

  // const arr = ["earn", "grow", "get", "have"];
  // const [word, setWord] = useState(arr[0]);
  // const wordChange = () => {
  //   const int = Math.floor(Math.random()*4);
  //   setWord(word => arr[int])
  //   return word
  // }

  // const [count, setCount] = useState(99);
  // const increment = () => {
  //   // we can also use different variable names
  //   setCount(count =>  {return count+1})
  // }
  // const decrement = () => {
  //   setCount(inccount => inccount-1)
  // }

  return (
    // <div className="main">
    // <p>Lets {word} Money</p>
    // <button onClick={wordChange}>change</button><br></br>
    // <button onClick={decrement}>-</button>
    // <span>{count}</span>
    // <button onClick={increment}>+</button>
    // </div>

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