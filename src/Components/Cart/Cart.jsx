import React from 'react'
import { useCart } from '../../Contexts/CartContext'

const Cart = () => {

    const {isCartOpen, toggleCart} = useCart()

    if (!isCartOpen) return null



  return (
    <div className='modal-component'>
        
        <div className='modal'>
            <div className='header'>
                <h3>Varukorg</h3>
                <button onClick={toggleCart} className='close-btn'>X</button>
            </div>
            
            <p>Här är din varukorg</p>
            
        </div>
        
    </div>
  )
}

export default Cart
