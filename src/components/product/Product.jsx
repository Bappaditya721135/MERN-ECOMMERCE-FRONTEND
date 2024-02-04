import React from 'react';
import ProductCard from './ProductCard';




export default function Product({products}) {

  return (
    <div id="products" className="product__section">
        <h2 className="product__section-heading">Featured Product</h2>
        <div className="product__container">
            {products.map((product, i) => {
            return <ProductCard key={i} product={product} />
        })}
        </div>
    </div>
  )
}
