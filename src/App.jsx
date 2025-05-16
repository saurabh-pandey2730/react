
import './App.css'
import {BrowserRouter,  Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
 import Users from './components/Users' 
import usersData from '../data'
import Counter from './components/Counter'
import MyContextProvider from './components/context/MyContextProvider'
import Joke from './components/Joke'
import UseContext from './components/UseContext'
import MyContext from './components/context/UseContext' 
import { useContext } from 'react'
import UseCounter from './components/CustomHooks'
 
function App() {

  return (
    <BrowserRouter>
      <MyContextProvider>
       <Navbar />
      <Routes>
           <Route path='/' element={<h1>Welcome to Home Page</h1>}/>
           <Route path='/jokes' element={  <Joke  />}/>
           <Route path='/counter' element={<Counter/>}/>


      </Routes>
        
      
          {/* <UseContext/> */}
          {/* <UseCounter/> */}
        
      </MyContextProvider>
    </BrowserRouter>
  )
}

export default App
