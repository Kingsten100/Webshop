import React, { useContext } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { ProductsContext } from '../../Contexts/ProductsContext'

const ProductList = () => {

    const {products} = useContext(ProductsContext)
  return (
    <div className='product-list' >
        <div className='product-display'>
            { products.map((product) => 
                <ProductCard key={product._id} product={product} />
            )}
        </div>
    </div>
  )
}

export default ProductList
