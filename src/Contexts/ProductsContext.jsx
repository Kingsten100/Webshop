import React, { createContext, useContext, useEffect, useState} from 'react'



export const ProductsContext = createContext()
export const useProducts = () => {
    return useContext(ProductsContext)
}

export const ProductsContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    
    useEffect(() => {
            const getProducts = async () => {
                try{
                const res = await fetch ('https://js2-ecommerce-api.vercel.app/api/products')
                const data = await res.json()
                setProducts(data)
                setFilteredProducts(data)
                

                const uniqueCategories = [
                    ...new Set(data.map((product) => product.category))
                ]
                setCategories(uniqueCategories)
                
            } catch (error){
                console.log('Något gick fel vid hämtning av produkter', error)
            }

            }
            getProducts()
        }, [])

        useEffect(() => {
            console.log('vald kategori', selectedCategory)
            console.log('alla produkter', products)
            if (selectedCategory === ''){
                setFilteredProducts(products)
            } else {
                const filtered = products.filter(
                    (product) => product.category === selectedCategory
                )
                console.log('filtrerade produkter', filtered)
                setFilteredProducts(filtered)
            }
        }, [selectedCategory, products])

        const value = {
            products,
            filteredProducts,
            categories,
            selectedCategory,
            setSelectedCategory
        }

    

    return (
        <ProductsContext.Provider value={value}>
            { children }
        </ProductsContext.Provider>
    )
}

    



