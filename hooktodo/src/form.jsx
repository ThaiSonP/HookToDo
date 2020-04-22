import React, {useState} from 'react';

// example 1 creating an input field:

const  Form = () => {
  const [item,setItem] = useState ('')
  // we define item with useState as a blank string
  // in the input tag we define value with the variable item which is the same type = ' text' it's name = item
  // we define setItem as a function to update the value of item

  return(
    <>
      To Do:
      <br/>
      <input value={item} onChange={e =>{setItem(e.target.value)}}></input>
      {item}
    </>
  )
}
export default Form
