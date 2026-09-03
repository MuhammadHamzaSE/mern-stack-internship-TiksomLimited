import React from 'react'
import "./ProductCard.css"
const ProductCard = ({product}) => {
  return (
    <div className='card'>
        <img style={{width:"150px", height:"100px",objectFit:'cover'}} src={product.thumbnail} alt={product.title} />
        <h5>Name : {product.title}</h5>
        <p>Category : {product.category}</p>
        <p>Price : {product.price}</p>
        <p>Rating : {product.rating}</p>
        <p>Stock :{product.stock}</p>
    </div>
  )
}

export default ProductCard
