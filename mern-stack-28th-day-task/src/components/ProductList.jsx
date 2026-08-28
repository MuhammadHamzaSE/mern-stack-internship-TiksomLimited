import React from 'react';
import "./ProductList.css"

const ProductList = ({ products, setSelectedProduct }) => {
  return (
    <div>
      <h2 className='product'>Products</h2>
      <div className='card'>
        {products.map((product) => (
        <div className='' key={product.id} style={{ margin: '10px 0', border: '1px solid #ccc', padding: '10px' }}>
          <img src={product.image} alt={product.name} width="150" />
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Price: ${product.price}</p>
          <button onClick={() => setSelectedProduct(product)}>Select</button>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductList;