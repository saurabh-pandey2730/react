
import './App.css'
import Navbar from './components/Navbar'
 import Users from './components/Users' 
import usersData from '../data'
import Counter from './components/Counter'

import Joke from './components/Joke'
function App() {
  

 
  let logoURL = "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo-2007-2015.png"
  let items=['home', 'about', 'contact', 'services' , 'projects' ] 

          //  console.log(jokeData)
     
  return (
    <>
     <Navbar  logo={logoURL} MenuData={items} />
    <Joke  />
      {/* <button onClick={()=>fetchData()}>next</button> */}
    </>
  )
}

export default App
