const Users = (data) => {
    // console.log(user.users)  
    let useruser = data.users
    
  return (
    <div style={{display:"flex",  justifyContent:"space-around", marginTop:"50px" ,}}>
         {
            useruser.map((user)=>{
                return <div style={{height :"150px", width:"300px" , border:"2px solid red",  backgroundColor:"#F3ECDC"}}>
                      <h1>{user.name}</h1>
                      <p>{user.email}</p>
                      <p>gender:- {user.gender}</p>

                </div>
            })
         }

    </div>
  )
}
export default Users