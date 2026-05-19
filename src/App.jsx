import { useState } from 'react'
import './App.css'
import { BrowserRouter , Link , Route , Routes } from 'react-router-dom'
import Navbars from './Navbar/Navbars'
import Header from './Header/Header'
import Home from './Pages/Home'
import Profile from './Pages/Profile'
import Repositories from './Pages/Repositories'
import NotFound from './Pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <div className="container">
      <div className="box">

      <div className="header">
        <Header/>
      </div>

      <div className="navbar">
        <Navbars/>
      </div>

      
      
      <Routes>

      <Route path='/' element = {<Home/>}/>
      <Route path='/user/:username' element = {<Profile/>}/>
      <Route path='/user/:username/repos' element = {<Repositories/>}/>
      <Route path='*' element = {<NotFound/>}/>

      </Routes>
      
      
      
      
      
      
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App
