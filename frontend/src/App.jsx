import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import CatalogIndex from "./pages/Catalog/CatalogIndex";
import CatalogLevelTwo from "./pages/Catalog/CatalogLevelTwo";
import CatalogList from "./pages/Catalog/CatalogList";
import CatalogDetail from "./pages/Catalog/CatalogDetail";
import PRODUCTS from "./data/products";
import SOLUTIONS from "./data/solutions"
import SOFTWARES from "./data/software";
import SoftwareIndex from "./pages/software/SoftwareIndex";
import SoftwareDetail from "./pages/software/SoftwareDetail";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ContactPage from './pages/ContactPage'
import OurBrands from "./pages/OurBrands";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/softwares" element={<SoftwareIndex />} />
        <Route path="/softwares/:slug" element={<SoftwareDetail data={SOFTWARES} />} />
        <Route path="/products" element={<CatalogIndex data={PRODUCTS} kind="product" />} />
        <Route path="/products/:category" element={<CatalogLevelTwo data={PRODUCTS} kind="product" />} />
        <Route path="/products/:category/:level2" element={<CatalogList data={PRODUCTS} kind="product" />} />
        <Route path="/products/:category/:level2/:slug" element={<CatalogDetail data={PRODUCTS} kind="product" />} />
        <Route path="/solutions" element={<CatalogIndex data={SOLUTIONS} kind="solution" />} />
        <Route path="/solutions/:category" element={<CatalogLevelTwo data={SOLUTIONS} kind="solution" />} />
        <Route path="/solutions/:category/:level2" element={<CatalogList data={SOLUTIONS} kind="solution" />} />
        <Route path="/solutions/:category/:level2/:slug" element={<CatalogDetail data={SOLUTIONS} kind="product" />} />
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/brands" element={<OurBrands />} />
      </Routes>
      <WhatsAppFloat />
    </>
  )
}

export default App
