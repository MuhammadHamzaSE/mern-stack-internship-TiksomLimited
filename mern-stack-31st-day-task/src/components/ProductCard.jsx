import React from 'react'
import ratingstar from "../assets/ratingstar.png"
import "./ProductCard.css"
import { Link } from 'react-router'
const ProductCard = ({product}) => {
  return (
    <Link className='card1' to={`/product/${product.id}`}>
    <div  className='card'>
      <div className='thumbnail'>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <h4 style={{marginBottom:"10px"}}>Name : {product.title}</h4>
      <p style={{marginBottom:"10px"}} >Category : {product.category}</p>
      <div className='price'style={{marginBottom:"10px"}}>
        <h4>${Math.abs(Math.round((product.price * product.discountPercentage/100)-product.price))}</h4>
        <p className='price1'>{product.price}</p>
        <p className='discountpercentage'>-{product.discountPercentage}</p>
      </div>
      <div className='rating' style={{marginBottom:"10px"}}>
        <div style={{display:'flex' ,gap:"4px"}}>
            {[1, 2, 3, 4, 5].map((star) => (
            <span
            key={star}
            style={{
            fontSize: '22px',
            lineHeight: '1',
            color: star <= Math.round(product.rating) ? '#FFC633' : '#E0E0E0' 
             }}
             >
             ★
           </span>
          ))}
        </div>
        <p style={{marginTop:"4px"}}>{product.rating} /5</p>
      </div>
      <p>Stock : {product.stock}</p>
    </div>
    </Link>
  )
}
export default ProductCard
