import React from 'react'
import { useCart } from '../../Contexts/CartContext'
import CartItem from '../../Components/CartItem/CartItem'

const Checkout = () => {

    const { cart, totalPrice, clearCart, placeOrder } = useCart()





  return (
    <div className='checkout-container'>
        <div>
            <h2>Checkout</h2>
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
            <button onClick={placeOrder} className='pur-btn'>Genomför köp</button>
          </div>
    </div>
  )
}

export default Checkout
