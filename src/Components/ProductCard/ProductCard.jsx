import React, { useContext } from 'react'
import { ProductsContext } from '../../Contexts/ProductsContext'
import { Link } from 'react-router'

const ProductCard = ({ product }) => {
    // const {products} = useContext(ProductsContext)
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
                <button className='atc-btn'>Lägg till i varukorg</button>
            </div>
        </div>

    
  )
}

export default ProductCard
