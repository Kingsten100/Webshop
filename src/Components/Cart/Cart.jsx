import React from 'react'
import { useCart } from '../../Contexts/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

  const {isCartOpen, toggleCart, cart, totalPrice} = useCart()

  if (!isCartOpen) return null


  return (
    <div className='modal-component'>
        
        <div className='modal'>
          <div className='header'>
              <h3>Varukorg</h3>
              <button onClick={toggleCart} className='close-btn'>X</button>
          </div>
          {
            cart.length <= 0 && (
              <div>
                <p>Din varukorg är tom</p>
              </div>
            )
          }
          {
            cart.map(item => (
              <CartItem key={'cart_' + item.product._id} item={item} />
            ))
          }
          <div className='total-price'>
            <p>Totalt: { totalPrice }:-</p>
          </div>
            
          
            
        </div>
        
    </div>
  )
}

export default Cart
