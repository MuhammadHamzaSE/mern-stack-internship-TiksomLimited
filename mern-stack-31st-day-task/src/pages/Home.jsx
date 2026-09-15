import React from 'react'
import Error from '../components/Error'
import Loading from '../components/Loading'
import ProductList from '../components/ProductList'
import Header from '../layouts/Header'
import Hero from '../components/Hero'
import Customer from '../components/Customer'
import Footer from '../layouts/Footer'
const Home = ({search,setSearch,products,loading,error}) => {
      if (loading) {
    return <Loading />
  }
  
  if (error) {
    return <Error message={error} />
  }

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  })
  return (
    <div>
      <Hero />
      <ProductList product1={filteredProducts} />
      <Customer />
    </div>
  )
}

export default Home
