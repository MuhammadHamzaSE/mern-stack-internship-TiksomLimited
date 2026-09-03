import { useState,useEffect } from 'react'
import SearchProduct from './components/SearchProduct'
import CategoryFilter from './components/CategoryFilter'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'
import Loading from './components/Loading'
import ErrorMessage from './components/ErrorMessage'
import EmptyState from './components/EmptyState'
import './App.css'
function App() {
  const[products,setProducts]=useState([])
  const[search,setSearch]=useState("")
  const[category,setCategory]=useState("all")
  const[loading,setLoading]=useState(true)
  const[error,setError]=useState("")
useEffect(()=>{
  async function getProducts(){
    try{
    setLoading(true)
    const reponse=await fetch("https://dummyjson.com/products")
if (!reponse.ok) {
  throw new Error("Failed To Fetch Products")
}
    const data =await reponse.json()
    setProducts(data.products)
    }
    catch(err){
      setError(err.message)
    }
    finally{
      setLoading(false)
    }
  }
  getProducts()
},[])

if(loading){
  return <Loading/>
}
if(error){
  return <ErrorMessage message={error} />;
}

const categories=[
  ... new Set(products.map((product)=>product.category))
]

const filteredProducts=products.filter((product)=>{
  const matchName=product.title.toLowerCase().includes(search.toLowerCase())
  const matchCategory=category==="all" || product.category===category

  return matchName && matchCategory
})
  return (
    <div className='main'>
    <h1 className='Heading'>Product Explorer</h1>
    <div className='category'>
      <CategoryFilter category={category} setCategory={setCategory} categories={categories}/>
          <div className='search'>
      { <SearchProduct search={search} setSearch={setSearch}/> }
          {filteredProducts.length === 0 && <EmptyState />}
          <div className='CardList'><ProductList product1={filteredProducts}/></div>
    </div>
    </div>

    </div>
  )
}

export default App
