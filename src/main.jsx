import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router'
import { CartProvider } from './Contexts/CartContext'

import './index.css'
import './Pages/About/About.css'
import './Pages/Contact/Contact.css'
import './Pages/Home/Home.css'
import './Pages/LogIn/Login.css'
import './Pages/Products/Products.css'
import './Pages/ProductDetails/ProductDetails.css'

import './Components/Navbar/Navbar.css'
import './Components/BannerFoot/BannerFoot.css'
import './Components/Footer/Footer.css'
import './Components/ImageSlider/ImageSlider.css'
import './Components/Cart/Cart.css'

import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Products from './Pages/Products/Products'
import LogIn from './Pages/LogIn/LogIn'
import Contact from './Pages/Contact/Contact'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Cart />
        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/about' element={ <About /> } />
          <Route path='/products' element={ <Products />} />
          <Route path='/login' element={ <LogIn />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/products/:productId' element={ <ProductDetails />} />
          

        </Routes>




      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
