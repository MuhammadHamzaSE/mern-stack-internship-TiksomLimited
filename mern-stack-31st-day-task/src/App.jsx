import { useState, useEffect } from 'react'
import './App.css'
import Header from './layouts/Header'
import Hero from './components/Hero'
import ProductList from './components/ProductList'
import Loading from './components/Loading'
import Error from './components/Error' 
import Customer from './components/Customer'
import SubFooter from './components/SubFooter'
import Footer from './layouts/Footer'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ProductDetail from './pages/ProductDetail'

function App() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true)
        const response = await fetch("https://dummyjson.com/products")
        if (!response.ok) {
          throw new Error("Failed To Fetch Products")
        }
        const data = await response.json()
        setProducts(data.products)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getProducts()
  }, [])

  return (
    <>
    <Header search={search} setSearch={setSearch}/>
    <Routes>
      <Route path='/' element={<Home search={search} setSearch={setSearch} products={products} loading={loading} error={error}/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>
    </Routes>
    <Footer/>
    </>

  )
}

export default App