import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


// OPTIONS FOR REACT STARS  
const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.5)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: 3.5,
    isHalf: true,
}

export default function Product({products}) {
  return (
    <div id="products" className="product__section">
        <h2 className="product__section-heading">Featured Product</h2>
        <div className="product__container">
            {products.map((product, i) => {
            return <Link to={product._id} key={i} className="product__card">
                <img src={product.images[0].url} alt={product.name} />
                <h4 className="product__name">{product.name}</h4>
                <div>
                    <ReactStars {...options} />
                    <span>(256 reviews)</span>
                </div>
                <p className="product__price">{product.price}</p>
            </Link>
        })}
        </div>
    </div>
  )
}
