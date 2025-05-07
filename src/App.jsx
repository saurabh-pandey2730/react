
import './App.css'
import Navbar from './components/Navbar'
 import Users from './components/Users' 
import usersData from '../data'
import Counter from './components/Counter'
import MyContextProvider from './components/context/MyContextProvider'
import Joke from './components/Joke'
import UseContext from './components/UseContext'
import MyContext from './components/context/UseContext' 
import { useContext } from 'react'
 
function App() {


   


    


  // console.log(imgUrl)
          
     
  return (
    <MyContextProvider>
     <Navbar />
     <Joke  />
      
      <UseContext/>

     
    </MyContextProvider>
  )
}

export default App
