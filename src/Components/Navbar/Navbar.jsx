import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router'
import './Navbar.css'
import { useCart } from '../../Contexts/CartContext'
import { DiJira } from "react-icons/di";
import { useAuth } from '../../Contexts/AuthContext'


const Navbar = () => {

  const {toggleCart} = useCart()
  const { token } = useAuth()


  

  return (
    <div className='navbar-component'>
      <div className='container'>
        <div className='navbar-container'>
          <Link to='/'>
            <p className='logotype'><DiJira />TechnoStuff</p>
          </Link>
          <ul className='navbar-links'>
            <li><NavLink to='/'>Hem</NavLink></li>
            <li><NavLink to='/about'>Om oss</NavLink></li>
            <li><NavLink to='/products'>Produkter</NavLink></li>
            <li><NavLink to='/contact'>Kontakt</NavLink></li>
            <div className='border'></div>

            {
              token ? (
                <li><NavLink to='/profile'>Profil</NavLink></li>
              ) : (
                <li><NavLink to='/login'>Login</NavLink></li>
              )
            }
            
            <li><button onClick={toggleCart}>Varukorg</button></li>
          </ul>
        </div>
        
      </div>
    </div>
    
   
  )
}

export default Navbar
