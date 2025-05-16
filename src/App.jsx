
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
 import React, { lazy, Suspense, useState } from 'react';

const UserData = lazy(() => import('./components/UserComponents'));
function App() {
  const [showUsers, setShowUsers] = useState(false);
  return (
    <BrowserRouter>
      <MyContextProvider>
       <Navbar />
        <div style={{ padding: '2rem' }}>
      <h1>Lazy Loaded API Data</h1>
      <button onClick={() => setShowUsers(true)}>Load Users</button>

      {showUsers && (
        <Suspense fallback={<p>Loading component...</p>}>
          <UserData />
        </Suspense>
      )}
    </div>
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
