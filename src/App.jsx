import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import AboutUs from './pages/about/AboutUs'
import Products from './pages/Products/Products'
import ProductDetails from './pages/Products/ProductDetails'
import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Blogs from './pages/blogs/BlogSection'
import Contact from './pages/Contact'



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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <WhatsAppButton />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
