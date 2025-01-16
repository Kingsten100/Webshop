import React from 'react'

import { useEffect, useState} from 'react'
import { Link } from 'react-router'

import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import BannerFoot from '../../Components/BannerFoot/BannerFoot'
import Footer from '../../Components/Footer/Footer'

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
            products.slice(0, 4).map((product) => (
              <li key={product._id} className='product-card spacing-y-1'>
                  <h2 className='justify-center'><Link to={`/products/${product._id}`}>{product.name}</Link></h2>
                  <div>
                    <div className='product-img-container'>
                      <img className='product-img' src={product.images[0]} alt={product.name} />
                    </div>
                    
                  </div>
                  
                  <div className='atc-container'>
                    <p className='price'>{product.price}:-</p>
                    <button className='atc-btn'>Lägg till i varukorg</button>
                  </div>
                  
              </li>
            ))
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
