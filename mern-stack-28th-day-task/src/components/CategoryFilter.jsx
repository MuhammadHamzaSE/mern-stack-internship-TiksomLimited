import React from 'react'
import "./CategoryFilter.css"

const CategoryFilter = ({selectedCategory,setSelectedCategory}) => {
  return (
    <div>
      <select className='category' name="" id="" value={selectedCategory} onChange={(e)=>(setSelectedCategory(e.target.value))}>
        <option value="All">All</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothes">Clothes</option>
        <option value="Shoes">Shoes</option>
      </select>
    </div>
  )
}

export default CategoryFilter
