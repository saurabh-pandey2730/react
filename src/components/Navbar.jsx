import { useContext } from 'react'
import  './Navbar.css'
import MyContext from './context/UseContext'
import { FaRegUserCircle } from "react-icons/fa";


const Navbar = () => {

    let {imgUrl, itemsData}=useContext(MyContext)

  return (
    <div className=" h-[66px] bg-[#734eed] flex justify-around items-center">
       <img src={imgUrl} alt=""  className='w-33' />
          <div className='w-[500px] flex justify-around items-center'>
            {
              itemsData.map((data, key)=>{
                return <a key={key} href="" className='text-xl font-extrabold no-underline'>{data}</a>
              })
            }
          </div>
          <div >
            <button className='ml-5 bg-[#1bdf18] rounded p-2 w-20 '>Login</button>
            <button className='ml-5 bg-[#1bdf18] rounded p-2 w-20'>Register</button>
          </div>
    </div>
  )
}
export default Navbar