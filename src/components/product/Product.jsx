import React from 'react';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';




export default function Product() {

  const {loading, products, error} = useSelector(state => state.product);

  return (
    <div id="products" className="product__section">
        <h2 className="product__section-heading">Featured Product</h2>
            {/* FOR LOADING   */}
            {loading && <div className="U-loading U-pos-parent"></div>}
        <div className="product__container">


            {/* IF PRODUCTS EXIST  */}
            {products && products.map((product, i) => {
            return <ProductCard key={i} product={product} />
        })}

            {/* FOR ERROR  */}
            {error && <p>error</p>}
        </div>
    </div>
  )
}
