import React, {useState} from 'react'
import './navbar.css'
import {GiBookmarklet} from 'react-icons/gi'
 import {AiFillCloseCircle} from 'react-icons/ai'
  import {TbGridDots} from 'react-icons/tb'
  import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
const Navbar = () => {

  const [active, setActive]= useState('navBar')
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }
  const removeNavbar =()=>{
    setActive('navBar ')
  }
  return (
 <section className='navBarSection'>
  <header className="header flex">
    <div className="logoDiv">
      <a href="#" className='logo'>
        <h1>Behtar-Kal.<GiBookmarklet className="icon"/></h1>
      </a>
    </div>
    <div className={active}>
      <ul className="navLists flex">
        <li className="navItem">
          <a href="#" className='navLink'>Home</a>
        </li>
        <li className="navItem">
          <a href="#" className='navLink'>About Us</a>
        </li>
        <li className="navItem">
          <a href="#" className='navLink'>Appeal</a>
        </li>
        <li className="navItem">
          <a href="#" className='navLink'>Media</a>
        </li>
        <li className="navItem">
          <a href="#" className='navLink'>Contact Us</a>
        </li>
        <li className="navItem">
          <a href="#" className='navLink'>Testimonials</a>
        </li>
        <Link to="/user">
        <button className="btn">
          <a href="/user">Login</a>
        </button>
        </Link>
      </ul>
      <div onClick={removeNavbar} className="closeNavbar">
      <AiFillCloseCircle className="icon"/>
      </div>
    </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon"/>
        </div>
  </header>
 </section>
  )
}

export default Navbar
