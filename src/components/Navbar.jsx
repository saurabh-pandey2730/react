import  './Navbar.css'

const Navbar = ({logo ,MenuData}) => {

  // console.log(data)

  return (
    <div className="navbar">
       <img src={logo} alt="" />
          <div className='menu-items'>
            {
              MenuData.map((data)=>{
                return <a key={data.id} href="">{data}</a>
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