import React from 'react'

const ProductDetail = ({ product }) => {
  if (!product) {
    return <p>Please Select A Product !</p>;
  }
  return (
    <div>
      <h2>Selected Product</h2>
      <img src={product.image} alt={product.name} width="150" />
      <h3>{product.name}</h3>
      <p>Category : {product.category}</p>
      <p>Price : $ {product.price}</p>
    </div>
  );
}

export default ProductDetail;