import React from 'react'
import "./SearchProduct.css"
const SearchProduct = ({search,setSearch}) => {
  return (
    <div className='search1'>
        <input type="text" style={{width:"700px", height:"35px",borderRadius: "10px"}}
        placeholder='Enter The Product Name :'
        value={search}
        onChange={(e)=>setSearch(e.target.value)} />
    </div>
  )
}
export default SearchProduct
