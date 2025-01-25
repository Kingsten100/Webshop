import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import { ProductsContext } from '../../Contexts/ProductsContext'
import { useCart } from '../../Contexts/CartContext'

const ProductDetails = () => {

  const { products } = useContext(ProductsContext)
  const { productId } = useParams()
  const { addToCart } = useCart()

  const product = products.length > 0 ? products.find(pro => pro._id === productId) : null

  if(!product){
    return <div>Laddar produkt...</div>
  }
  
  

  const handleClick = () => {
    console.log('Lägger till produkt', product)
    addToCart(product)
  }

  return (
    <div className='pd-card'>
      <div className='pd-img-container'>
        <div className='bild'> 
        
          <div className='img-img'>
            <ImageSlider images={product.images} />
          </div>
        </div>
      </div>
      <div className='pd-info'>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </div>
      <div className='pd-pur'>
        <p>{product.price}:-</p>
        <button className='atc-btn' onClick={handleClick}>Lägg till i varukorg</button>
      </div>
    </div>
  )
  
}

export default ProductDetails
