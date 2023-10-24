import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import About from './components/about/About'
import {Route, Routes} from "react-router-dom";

const App = () => {
  return (
   <>
   <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/about' element={<About/>} />
    <Route path='/main' element={<Main/>} />
    <Route path='/user' element={<Login/>} />

    
    </Routes>
    <Footer/>
   </>
  )
}

export default App
