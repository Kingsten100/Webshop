import React from 'react'

import { useEffect, useState} from 'react'
import { Link } from 'react-router'

import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import BannerFoot from '../../Components/BannerFoot/BannerFoot'
import Footer from '../../Components/Footer/Footer'
import ProductCard from '../../Components/ProductCard/ProductCard'

const Home = () => {

  const [products, setProducts] = useState([])
  
      useEffect(() => {
          const getProducts = async () => {
              const res = await fetch ('https://js2-ecommerce-api.vercel.app/api/products')
              const data = await res.json()
              setProducts(data)
          }
          getProducts()
      }, [])





  return (
    <>
    <div className='home-page'>
      <div className='hero-img-container'>
        <img src="src/Images/Hero-img.jpg" alt="" />
        <div className='hero-text'>
          <h1>Hejsan hur mår du?</h1>
          <p>Kolla in våra fina produkter</p>
          <button>Gå till produkter</button>
        </div>
      </div>
      <div className='products-title'>
        <h2>Våra produkter</h2>
      </div>
      <div className='product-section'>
        <ul className='product-list'>
          {
             <div className='product-list' >
             <div className='product-display'>
                 { products.slice(0, 3).map((product) => 
                     <ProductCard key={product._id} product={product} />
                 )}
             </div>
         </div>
          }
        </ul>
        <div className='show-more-btn'>
          <Link to='/products'>Visa fler</Link>
        </div>

      </div>
          
      
    </div>
    <BannerFoot />
    <Footer />
    </>

  )
}

export default Home
