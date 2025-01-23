import { createContext, useContext, useState } from "react";

const AtcContext = createContext()

export const AtcProvider = ({children}) => {
    const[cartItems, setCartItems] = useState([])

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const itemExists = prevItems.find((item) => item.id === product.id)
            if(itemExists) {
                return prevItems.map((item) => 
                    item.id === product.id ? {...item, quantity: item.quantity + 1} : item
            )
            } else {
                return [...prevItems, {...product, quantity: 1}]
            }
        })
    }

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
    }
    
    return(
        <AtcContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </AtcContext.Provider>
    )

}



export const useATC = () => useContext(AtcContext)