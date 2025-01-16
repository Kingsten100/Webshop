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
                        <h2 className='justify-center'><Link to={`/products/${product._id}`}>{product.name}</Link></h2>
                        <ImageSlider images={product.images} />
                        <p>{product.price}:-</p>
                        <button className='atc-btn'>Lägg till i varukorg</button>
                    </li>
                ))
            }
        </ul>
        
    </div>
  )
}

export default Products
