import React, { useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { ProductsContext, useProducts } from '../../Contexts/ProductsContext'

const ProductList = () => {

    const { filteredProducts } = useProducts()
    
  return (
    <div className='product-list' >
        <div className='product-display'>
            { filteredProducts.map((product) => 
                <ProductCard key={product._id} product={product} />
            )}
        </div>
    </div>
  )
}

export default ProductList
