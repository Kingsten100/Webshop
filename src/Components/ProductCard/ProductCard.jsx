import React, { useContext, useState } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext'
import { Link } from 'react-router'
import { useCart } from '../../Contexts/CartContext'

const ProductCard = ({ product }) => {
    // const {products} = useContext(ProductsContext)

    const { addToCart } = useCart()
    const [atcText, setAtcText] = useState('Lägg till i varukorg')

    const handleClick = () => {
        console.log('Lägger till produkt', product)
        addToCart(product)
        setAtcText('Lägger till...')

        setTimeout(() => {
            setAtcText('Lägg till i varukorg')
        }, 2000)
      }

  return (
   
        <div className='product-card' >
            <div className='product-img-container'>
                <Link to={`/products/${product._id}`}>
                    <img src={product.images[0]}  />
                </Link>  
               
            </div>
            <div className='product-info'>
                <Link to={`/products/${product._id}`}>
                    <h3 className='product-title'>{product.name}</h3>
                </Link>
                
            </div>
            <div>
                <p className='product-price'>{product.price}:-</p>
                <button onClick={handleClick} className='atc-btn'>{atcText}</button>
            </div>
        </div>

    
  )
}

export default ProductCard
