import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Solutions from './pages/Solutions'
import Softwares from './pages/Softwares'
import CatalogIndex from "./pages/Catalog/CatalogIndex";
import CatalogLevelTwo from "./pages/Catalog/CatalogLevelTwo";
import CatalogList from "./pages/Catalog/CatalogList";
import CatalogDetail from "./pages/Catalog/CatalogDetail";
import PRODUCTS from "./data/products";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/solutions" element={<Solutions/>}/>
        <Route path="/softwares" element={<Softwares/>}/>
        <Route path="/products" element={<CatalogIndex data={PRODUCTS} kind="product" />} />
        <Route path="/products/:category" element={<CatalogLevelTwo data={PRODUCTS} kind="product" />} />
        <Route path="/products/:category/:level2" element={<CatalogList data={PRODUCTS} kind="product" />} />
        <Route path="/products/:category/:level2/:slug" element={<CatalogDetail data={PRODUCTS} kind="product" />} />
      </Routes>
    </>
  )
}

export default App
