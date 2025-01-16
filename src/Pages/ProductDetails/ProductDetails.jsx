import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ImageSlider from '../../Components/ImageSlider/ImageSlider'

const ProductDetails = () => {

    const {productId} = useParams()

    const [product, setProduct] = useState([])
    

    useEffect(()=> {
        const getProduct = async () => {
            const res = await fetch(`https://js2-ecommerce-api.vercel.app/api/products/${productId}`)
            const data = await res.json()
            setProduct(data)
        }
        getProduct()
    }, [productId])

  return (
    <div className='pd-card'>
      <h1>{product.name}</h1>
      <ImageSlider images={product.images} />
      <p>{product.description}</p>
    </div>
  )
  
}

export default ProductDetails
