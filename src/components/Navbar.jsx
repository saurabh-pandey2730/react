import { useContext } from 'react'
import  './Navbar.css'
import MyContext from './context/UseContext'



const Navbar = () => {

    let {imgUrl, itemsData}=useContext(MyContext)

  return (
    <div className="navbar">
       <img src={imgUrl} alt="" />
          <div className='menu-items'>
            {
              itemsData.map((data, key)=>{
                return <a key={key} href="">{data}</a>
              })
            }
          </div>
          <div className="btn">
            <button className=''>Login</button>
            <button>Register</button>
          </div>
    </div>
  )
}
export default Navbar