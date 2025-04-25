import { useState } from "react"

const Users = (data) => {
    // console.log(user.users)  
    let users = data.users

              const [ cart , setCart]= useState([])
                
     const handleShowdata = function(){
      setCart(users)
     }
  const handleShowMaledata = function(){
            const newData =  cart.filter((user)=>user.gender=='Male')
            // console.log(newData) 
            setCart(newData)
  }

  return (
      <div>
          <div style={{display:"flex",  justifyContent:"space-around", marginTop:"50px" ,}}>
         {
            cart.map((user)=>{
                return <div style={{height :"150px", width:"280px" , border:"2px solid red",  backgroundColor:"#F3ECDC"}}>
                      <h1>{user.name}</h1>
                      <p>{user.email}</p>
                      <p>gender:- {user.gender}</p>
             
                </div>
            })
         }
  
    </div> 
            <button className="btn-data" onClick={handleShowdata}>show data</button>
            <button className="btn-data" onClick={handleShowMaledata}>show male data</button>
      </div>
  )
}
export default Users