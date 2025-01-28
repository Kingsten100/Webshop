import React, { useEffect, useState} from 'react'

import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import { Link, useParams } from 'react-router'
import ProductList from '../../Components/ProductList/ProductList'
import { useProducts } from '../../Contexts/ProductsContext'

const Products = () => {

  const { categories, setSelectedCategory} = useProducts()

  const handleCategoryChange = (e) => {
    console.log('Kategori vald:', e.target.value)
    setSelectedCategory(e.target.value)
  }

  return (
    <div className='products-page'>
      <div>
        <h1>Våra produkter</h1>
      </div>
      <div className='filter'>
        <label htmlFor="category">Filtrera efter kategori:</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="">Alla kategorier</option>
          {categories && categories.length > 0 ? (
            categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))
          ) : (
            <option disabled>Laddar kategorier...</option>
          )}
          {/* {categories.map((category) => (
            <option value="category" key={category}></option>
          ))} */}
        </select>
      </div>
       <ProductList />
        
    </div>
  )
}

export default Products
 