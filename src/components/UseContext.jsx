import React,{useContext} from "react"
 import MyContext from "./context/UseContext"
const UseContext = () => {
               
        let {Name, fullName}= useContext(MyContext)
          Name = "Hello EverOne"       
  return (
    <div>
     <h1>hello context API</h1>
     <p>{Name}</p>
     <p>{fullName}</p>
       
    </div>
  )
}
export default UseContext