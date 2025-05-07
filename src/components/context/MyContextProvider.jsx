import React, { useState } from "react" 
import MyContext from "./UseContext"


const MyContextProvider = ({children}) => {
           let h = 'hello'
  const [imgUrl, setImgUrl] = useState("https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo-2007-2015.png")
  const [itemsData, setItemsData] = useState(['home', 'about', 'contact', 'services' , 'projects' ])
  

  return (
    <MyContext.Provider value={{imgUrl , setImgUrl ,itemsData, setItemsData,h}} >
      {children}
    </MyContext.Provider>
  )
}
export default MyContextProvider