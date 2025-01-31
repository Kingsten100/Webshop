import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import { CartContextProvider } from './Contexts/CartContext'


import './index.css'
import './Pages/About/About.css'
import './Pages/Contact/Contact.css'
import './Pages/Home/Home.css'
import './Pages/LogIn/Login.css'
import './Pages/Products/Products.css'
import './Pages/ProductDetails/ProductDetails.css'
import './Pages/Checkout/Checkout.css'
import './Pages/Private/PrivatePage.css'

import './Components/Navbar/Navbar.css'
import './Components/BannerFoot/BannerFoot.css'
import './Components/Footer/Footer.css'
import './Components/ImageSlider/ImageSlider.css'
import './Components/Cart/Cart.css'
import './Components/ProductList/ProductList.css'
import './Components/ProductCard/ProductCard.css'
import './Components/CartItem/CartItem.css'
import './Components/RegisterForm/RegisterForm.css'
import './Components/LoginForm/LoginForm.css'
import './Components/PurchaseModal/PurchaseModal.css'

import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Products from './Pages/Products/Products'
import LogIn from './Pages/LogIn/LogIn'
import Contact from './Pages/Contact/Contact'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'
import { ProductsContextProvider } from './Contexts/ProductsContext'
import { ContactContextProvider } from './Contexts/ContactContext'
import Checkout from './Pages/Checkout/Checkout'
import AuthContextProvider from './Contexts/AuthContext'
import Rootlayout from './layouts/Rootlayout'
import AuthLayout from './layouts/AuthLayout'
import Register from './Pages/Register/Register'
import PrivateLayout from './layouts/PrivateLayout'
import PrivatePage from './Pages/Private/PrivatePage'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <ProductsContextProvider>
          <ContactContextProvider>
            <BrowserRouter>
              <Navbar />
              <Cart />
              <Routes>
                <Route element={ <Rootlayout /> }>
                  <Route path='/' element={ <Home />} />
                  <Route path='/about' element={ <About /> } />
                  <Route path='/products' element={ <Products />} />
                  <Route path='/contact' element={ <Contact />} />
                  <Route path='/products/:productId' element={ <ProductDetails />} />
                  <Route path='/checkout' element={ <Checkout />} />
                </Route>

                <Route element={ <AuthLayout /> }>
                  <Route path='/login' element={ <LogIn />} />
                  <Route path='/register' element={ <Register /> } />
                </Route>

                <Route element={ <PrivateLayout /> }>
                  <Route path='/profile' element={ <PrivatePage /> } />
                </Route>


              </Routes>
            </BrowserRouter>
          </ContactContextProvider>
        </ProductsContextProvider>
      </CartContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
