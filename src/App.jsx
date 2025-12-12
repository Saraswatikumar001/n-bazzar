import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Hero from './components/hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <Navbar />
        <Routes>          
           <Route path='/' element={<Hero />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
