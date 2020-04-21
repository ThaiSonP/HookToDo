import React, {useState} from 'react';

// this is the basics of use state
// we're going to compare the differences from state and UseState

function App() {

  const [count, setCount] = useState(0)
  // count would normally be decared in this.state.
  // setCount is a specific function to SetState(count)
  // useState (0) is the initial value that we are declaring for this.state.count = 0

  // in our return statement we are returning Count without having to deconstruct it
  // on our button we're declaring the invokation of SetCount and passing in the value of count in order to update count with setCount 


  return (
    <div className="App">
      <div>Count:{count}</div>
      <button onClick={()=> setCount(count +1)}>+</button>
    </div>
  );
}

export default App;
