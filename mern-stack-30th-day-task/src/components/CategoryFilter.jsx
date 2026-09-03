import React from 'react'
import "./CategoryFilter.css"
const CategoryFilter = ({category,setCategory,categories}) => {
  return (
    <div>
        <select className='search' name="" id="" value={category} onChange={(e)=>setCategory(e.target.value)}>
            <option value="all">
                All
            </option>
            {categories.map((catg)=>(
                <option value={catg} key={catg}>{catg}</option>
            ))}

        </select>
    </div>
  )
}

export default CategoryFilter
