import React from "react"
import UseCounter from "./CustomHooks"

const UseContext = () => {
                   const [count,Increment,Decrement,reset]=UseCounter(10)

  return (
    <div>
            <h1>{count}</h1>
     <h1>hello context API</h1>
     <button onClick={Increment}>inc</button>
     <button onClick={Decrement}>dec</button>
     <button onClick={reset}>reset</button>
       
    </div>
  )
}
export default UseContext