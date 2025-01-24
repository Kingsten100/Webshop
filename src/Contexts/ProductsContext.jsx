import React, { createContext, useEffect, useState} from 'react'
import { useParams } from 'react-router'


export const ProductsContext = createContext()

export const ProductsContextProvider = ({ children }) => {
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
        <ProductsContext.Provider value={{products}}>
            { children }
        </ProductsContext.Provider>
    )
}

    



