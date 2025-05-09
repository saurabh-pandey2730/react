import { useState } from "react"

 
function UseCounter(intialValue=10) {

 const [count , setCount] = useState(intialValue) 
  
  const Increment =()=>setCount(count+1)
  const Decrement =()=>setCount(count-1)
  const reset =()=>setCount(intialValue)


  return  [count,Increment,Decrement,reset]
  
}
export default UseCounter