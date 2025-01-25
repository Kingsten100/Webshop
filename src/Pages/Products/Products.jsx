import React, { useEffect, useState} from 'react'

import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import { Link } from 'react-router'
import { useATC } from '../../Contexts/AddToCart'
import ProductList from '../../Components/ProductList/ProductList'

const Products = () => {

    

  return (
    <div className='products-page'>
       <ProductList />
        
    </div>
  )
}

export default Products
