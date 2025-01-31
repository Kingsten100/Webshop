import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router'
import './Navbar.css'
import { useCart } from '../../Contexts/CartContext'
import { DiJira } from "react-icons/di";


const Navbar = () => {

  const {toggleCart} = useCart()

  

  return (
    <div className='navbar-component'>
      <div className='container'>
        <div className='navbar-container'>
          <Link to='/'>
            <p className='logotype'><DiJira />TechnoStuff</p>
          </Link>
          <ul className='navbar-links'>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/products'>Products</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
            <div className='border'></div>
            <li><NavLink to='/login'>Login</NavLink></li>
            <li><button onClick={toggleCart}>Varukorg</button></li>
          </ul>
        </div>
        
      </div>
    </div>
    
   
  )
}

export default Navbar
