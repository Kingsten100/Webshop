import React from 'react'
import { useCart } from '../../Contexts/CartContext'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

  const {isCartOpen, toggleCart, cart, totalPrice, toggleCartOverlay} = useCart()

  if (!isCartOpen) return null

  const handleModalClick = (e) => {
    e.stopPropagation()
  }


  return (
    <div onClick={toggleCartOverlay} className='modal-component'>
        
        <div className='modal' onClick={handleModalClick}>
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
