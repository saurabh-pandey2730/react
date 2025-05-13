import { useEffect, useState } from "react"
import { FaPlusCircle } from "react-icons/fa"; 
import { FaCircleMinus } from "react-icons/fa6";
const Counter = () => {

        const [number,setNumber]  = useState(0)
      
        function IncreaseNumber(){
          // console.log('before setFun',number)
          // setNumber(number+1)
          // setNumber(number+1)
          // setNumber(number+1)
           setNumber((prev)=>prev+1)
          //  setNumber((prev)=>prev+1)
          //  setNumber((prev)=>prev+1)
          // console.log('after setFun',number)
        }
      useEffect(()=>{
        console.log("useEffect called and fetching data")  
      },[]) 
                
  return (

    <div>
        <h1>Counter APP</h1>
         <h1 className="text-3xl ml-24 mb-5">{number}</h1>

        <button className="btn-data" onClick={IncreaseNumber}><FaPlusCircle/></button>
        <button className="btn-data" onClick={()=>setNumber(number-1)}> <FaCircleMinus/>   </button>

    </div>
  )
}
export default Counter