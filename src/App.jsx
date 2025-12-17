import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import AboutUs from './pages/about/AboutUs'
import Products from './pages/Products/Products'
import ProductDetails from './pages/Products/ProductDetails'
import Cart from './pages/Cart/Cart'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
