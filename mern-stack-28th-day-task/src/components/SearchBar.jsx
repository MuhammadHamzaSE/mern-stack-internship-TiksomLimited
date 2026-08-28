import React from 'react'
import "./SearchBar.css"
const SearchBar = ({search,setSearch}) => {
  return (
    <div>
        <input className='input' type="text" value={search} placeholder='Search Product ...'  onChange={(e)=>{setSearch(e.target.value)}}/>
      
    </div>
  )
}

export default SearchBar
