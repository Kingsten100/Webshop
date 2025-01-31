import React from 'react'
import { useCart } from '../../Contexts/CartContext'
import CartItem from '../../Components/CartItem/CartItem'
import PurchaseModal from '../../Components/PurchaseModal/PurchaseModal'

const Checkout = () => {

    const { cart, totalPrice, clearCart, placeOrder, isPurModalOpen, closeModal } = useCart()





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
            <div>
              <button onClick={placeOrder} className='pur-btn'>Genomför köp</button>
              <button className='clear-btn' onClick={clearCart}>Rensa korgen</button>

            </div>
          </div>
          <PurchaseModal isOpen={isPurModalOpen} onClose={closeModal}/>
    </div>
  )
}

export default Checkout
