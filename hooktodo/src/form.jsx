import React, {useState} from 'react';

// example 1 creating an input field:

export default () => {
  const [item,setItem] = useState ('')
  // we define item with useState as a blank string
  // in the input tag we define value with the variable item which is the same type = ' text' it's name = item
  // we define setItem as a function to update the value of item

  // return(
  //   <>
  //     To Do:
  //     <br/>
  //     <input value={item} onChange={e =>{setItem(e.target.value)}}></input>
  //     {item}
  //   </>
  // )
// }


// example 2 creating a function using useState to update variables
const useInputValue = initalValue =>{
  const [value, setValue] = useState(initalValue);

  return {
    value,
    onChange: e => setValue (e.target.value)
  }
}
  // with useInputValue we can apply it directly to various input fields without having to declare the same onChange effect from example 1
  const text = useInputValue("")
  const email = useInputValue("")

  return(
    <div>
      Text: <input {...text}/>
    <br/>
      Email: <input{...email}/>
    </div>
  )

}
