import React from 'react'
import { useCart } from '../../Contexts/CartContext'

const CartItem = ( {item} ) => {

const { addToCart } = useCart()
const { removeOne } = useCart()
const { removeItem } = useCart()

const handleRemoveOne = () => {
    console.log('Tar bort en')
    removeOne(item.product._id)
}


const handleClick = () => {
    console.log('Lägger till produkt en')
    addToCart(item.product)
  }

const handleRomeveItemClick = () => {
    console.log('Tar bort produkten') 
    removeItem(item.product._id)
}


  return (
    <div className='cart-item'>
        
        <div className='container'>
            <div className='cart-img'>
                <img src={item.product.images[0]} alt="" />
                <div className='product-info'>
                    
                    <p className='product-name'>{item.product.name}</p>
                    <p className='product-price'>{item.quantity} x {item.product.price}:-</p>
                    
                </div>
            </div>
            <div className='cart-btns'>
                <button onClick={handleClick} className='add-btn'> + </button>
                <button onClick={handleRemoveOne} className='remove-btn'> - </button>
                <div>
                    <button className='delete-btn' onClick={handleRomeveItemClick}> X </button>
                </div>
            </div>
        </div>
       

    </div>
  )
}

export default CartItem
