import React, { useState } from 'react';
import ProductCard from './ProductCard';
import "./ProductList.css";

const ProductList = ({ product1 = [] }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? product1 : product1.slice(0, 10);

  return (
    <div className="product-list-container">
      <div className='newarrival'>
        <h1>NEW ARRIVALS</h1>
      </div>

      <div className='carddetail'>
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {product1.length > 10 && (
        <div className='btn2'>
          <button className='btn3' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : 'View All'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;