import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router , Route, Routes} from "react-router-dom"
import Header from './component/Header/Header'
import Home from './Screen/Home/Home'



function App() {


  return (
    <>
    
     <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wedding' element={<Home/>}/>
        <Route path='/birthday' element={<Home/>}/>
        <Route path='/reception' element={<Home/>}/>
        <Route path='/all' element={<Home/>}/>

      </Routes>
     </Router>
    
    </>
  )
}

export default App
