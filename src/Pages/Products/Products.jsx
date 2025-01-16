import React, { useEffect, useState} from 'react'
import ProductItem from '../../Components/ProductItem'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'
import { Link } from 'react-router'

const Products = () => {

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
    <div className='products-page'>
        <ul className='product-container'>
            {
                products.map((product) => (

                    <li key={product._id} className='product-card spacing-y-1'>
                        <h2 ><Link to={`/products/${product._id}`} className='product-title'>{product.name}</Link></h2>
                        <div>
                            <div className='product-img-container'>
                                <ImageSlider images={product.images} />
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
        
    </div>
  )
}

export default Products
