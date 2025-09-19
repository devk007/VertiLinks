import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Products from './pages/Products'
import Solutions from './pages/Solutions'
import Softwares from './pages/Softwares'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/softwares" element={<Softwares/>}/>
      </Routes>
    </>
  )
}

export default App
