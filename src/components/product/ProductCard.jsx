import React from 'react'
import { Link } from 'react-router-dom';
import ReactStars from "react-rating-stars-component"

export default function ProductCard({product}) {
  // OPTIONS FOR REACT STARS  
  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.5)",
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
}
  return (
    <Link to={`product/${product._id}`} className="product__card">
                <div className="product__img--container">
                    <img src={product.images[0].url} alt={product.name} />
                </div> 
                <h4 className="product__name">{product.name}</h4>
                <div>
                    <ReactStars {...options} />
                    <span>({product.numOfReviews} reviews)</span>
                </div>
                <p className="product__price">₹{product.price}</p>

            </Link>
  )
  }




