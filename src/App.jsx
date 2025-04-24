
import './App.css'
import Navbar from './components/Navbar'
 import Users from './components/Users' 
import usersData from '../data'
function App() {
  //  console.log(usersData)
  let logoURL = "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo-2007-2015.png"
  let items=['home', 'about', 'contact', 'services' , 'projects' ] 
  return (
    <>
     <Navbar  logo={logoURL} MenuData={items} />
     <Users users={usersData} />
    
    </>
  )
}

export default App
