import React from "react" 
import MyContext from "./UseContext"

const MyContextProvider = ({children}) => {
         
       let Name = "hello context "
        let fullName = 'Shivansh'
  return (
    <MyContext.Provider value={{Name,fullName}} >
      {children}
    </MyContext.Provider>
  )
}
export default MyContextProvider