import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './pages/Home/Home'
import Footer from './components/layout/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import AboutUs from './pages/about/AboutUs'
import Products from './pages/Products/Products'



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/products' element={<Products />} />  
                 
        </Routes>
        <WhatsAppButton />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
