import { useState } from "react"

const Counter = () => {

               const [number,setNumber]  = useState(0)
      
        function IncreaseNumber(){
            setNumber(number+1)
        }
       
                
  return (

    <div>
        <h1>Counter APP</h1>
         <h1>{number}</h1>

        <button className="btn-data" onClick={IncreaseNumber}>Increase+</button>
        <button className="btn-data" onClick={()=>setNumber(number-1)}>Decrease-</button>

    </div>
  )
}
export default Counter