import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';

function App() {
    const products = [
    {
      id: 1,
      name: "iPhone 15",
      category: "Electronics",
      price: 999,
      image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd8",
    },
    {
      id: 2,
      name: "MacBook Air",
      category: "Electronics",
      price: 1299,
      image: "https://images.unsplash.com/photo-1517336714739-489689fd1ca8",
    },
    {
      id: 3,
      name: "Nike Shoes",
      category: "Shoes",
      price: 120,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    },
    {
      id: 4,
      name: "Adidas Shoes",
      category: "Shoes",
      price: 100,
      image: "https://images.unsplash.com/photo-1552346154-21d32810aba3",
    },
    {
      id: 5,
      name: "T-Shirt",
      category: "Clothes",
      price: 30,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 6,
      name: "Jeans",
      category: "Clothes",
      price: 50,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    },
  ];

  const [search,setSearch] = useState("");
  const [selectedCategory,setSelectedCategory] = useState("All");
  const [selectedProduct,setSelectedProduct] = useState(null);

const filteredProducts=products.filter((product)=>{
  const matchProduct=product.name.toLowerCase().includes(search.toLocaleLowerCase())
  const macthCategory=selectedCategory === "All" || product.category === selectedCategory ;
  
  return matchProduct && macthCategory ;
})

  return (
    <div className='container'>
    <h1 className='Header' style={{textAlign:"center"}}>Product Filter App</h1>
    <div className='searching'>
    <SearchBar search={search} setSearch={setSearch}/>
    <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
    <div className='card'>
      <ProductList  products={filteredProducts} setSelectedProduct={setSelectedProduct}/>
    </div>
    <ProductDetail product={selectedProduct}/>
    </div>
  )
}

export default App
