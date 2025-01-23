import React from 'react'
import { useCart } from '../../Contexts/CartContext'
import { useATC } from '../../Contexts/AddToCart'

const Cart = () => {

    const {isCartOpen, toggleCart} = useCart()
    const {cartItems, removeFromCart} = useATC()

    if (!isCartOpen) return null



  return (
    <div className='modal-component'>
        
        <div className='modal'>
            <div className='header'>
                <h3>Varukorg</h3>
                <button onClick={toggleCart} className='close-btn'>X</button>
            </div>
            <ul>

            
              {
                cartItems.length === 0 ? (
                  <p>Din varukorg är tom</p>
                ) : (
                  cartItems.map((item) => (
                    <li key={item.id}>
                      <p>{item.name} - {item.quantity} st</p>
                      <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
                    </li>
                  ))
                )
              }
            </ul>
            
            <p>Här är din varukorg</p>
            
        </div>
        
    </div>
  )
}

export default Cart
