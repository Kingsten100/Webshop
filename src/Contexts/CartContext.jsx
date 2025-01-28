import React, {createContext, useContext, useState} from 'react'


export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext)
  if(!context) throw new Error('useCart can not be used outside of an CartContextProvider')
    return context
}

const getTotalPrice = (cart) => {
  let total = 0
  cart.forEach(item => {
    total += item.product.price * item.quantity
  })
  return total
}

const getTotalQuantity = (cart) => {
  let total = 0
  cart.forEach(item => {
    total += item.quantity
  })
  return total
}

export const CartContextProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([])
  const totalquantity = getTotalQuantity(cart)
  const totalPrice = getTotalPrice(cart)


  

  const addToCart = (product) => {
    const item = cart.find(cartItem => cartItem.product._id === product._id)

    let newCart = [...cart]
    item
    ? item.quantity ++
    : newCart.push({ product, quantity: 1})

    setCart(newCart)
  }

  const removeOne = (productId) => {


    const item = cart.find(cartItem => cartItem.product._id === productId)

    let newCart = [...cart]

    item.quantity <= 1
    ? newCart = newCart.filter(item => item.product._id !== productId)
    : item.quantity --

    setCart(newCart)
  }

  const removeItem = (productId) => {
    setCart(currentCart => {
      console.log('Innan borttagning:', currentCart);
      console.log('Tar bort produkt med ID:', productId);

      const newCart = currentCart.filter(item => item.product._id !== productId);

      console.log('Efter borttagning:', newCart);

      if (newCart.length === currentCart.length) {
          console.warn(`Ingen produkt med ID ${productId} hittades i kundvagnen.`);
      }

      return newCart;
  });
  }

  const clearCart = () => {
    setCart([])
  }

  const toggleCart = (e) => {
    e.stopPropagation()
    setIsCartOpen(!isCartOpen);

    if(!isCartOpen){
      document.body.style.overflow = 'hidden'
    } else{
      document.body.style.overflow = 'auto'
    }
  }



  const toggleCartOverlay = (e) => {
    e.stopPropagation()
    setIsCartOpen(!isCartOpen)

    if(!isCartOpen){
      document.body.style.overflow = 'hidden'
    } else{
      document.body.style.overflow = 'auto'
    }
  }

  const value = {
    cart,
    totalPrice,
    totalquantity,
    addToCart,
    removeOne,
    removeItem,
    clearCart,
    isCartOpen,
    toggleCart,
    toggleCartOverlay

  }

  return (
    <CartContext.Provider value={ value }>
      {children}
    </CartContext.Provider>
  );
};