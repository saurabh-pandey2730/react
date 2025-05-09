import { useEffect, useState } from "react"

const Counter = () => {

        const [number,setNumber]  = useState(0)
      
        function IncreaseNumber(){
          // console.log('before setFun',number)
          // setNumber(number+1)
          // setNumber(number+1)
          // setNumber(number+1)
           setNumber((prev)=>prev+1)
           setNumber((prev)=>prev+1)
           setNumber((prev)=>prev+1)
          // console.log('after setFun',number)
        }
      useEffect(()=>{
        console.log("useEffect called and fetching data")  
      },[]) 
                
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