import React from 'react'
import "./ProductList.css"
import ProductCard from './ProductCard'
const ProductList = ({product1}) => {
  return (
    <div className='cardDetail'>
        {product1.map((product)=>(
            <ProductCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default ProductList
