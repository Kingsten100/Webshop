import React from 'react'

const ProductItem = () => {
  return (
    <div className='product-container'>
         <div className='product-card'>
      <div className='img-container'>
        <img className='product-img' src="https://www.elgiganten.se/image/dv_web_D1800010021018705/474917/macbook-air-m2-8256gb-space-gray--pdp_zoom-3000.jpg" alt="" />
      </div>
      <div>
        <h2>MacBook Air 2020</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ex!</p>
        <button>Läs mer</button>
        <button>Köp nu</button>
      </div>
    </div>
    </div>
   
  )
}

export default ProductItem
