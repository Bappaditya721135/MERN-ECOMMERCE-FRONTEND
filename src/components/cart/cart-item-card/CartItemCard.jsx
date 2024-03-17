import React from 'react'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getMyCart } from '../../../redux/my cart/myCartAction';

function CartItemCard({product, quantity}) {
  console.log("product")
  console.log(product);
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    axios.delete(`/api/v1/cart/delete/${product._id}`).then(res => {
      dispatch(getMyCart())
    }).catch(err => [
      console.log(err)
    ])
  }
  return (
    <Link to={`/product/${product._id}`} className="cart-product__card" >
        <div className="product-image__container">
            <img src={product.images[0].url} alt={product.name} />
        </div>
        <div className="product-details">
            {/* <div> */}
              <h3>{product.name}</h3>
            {/* </div> */}
            <p className="product-quantity">Quantity: {quantity}</p>
        </div>
        <div className="product-price">
          <h3>₹ {product.price * quantity}</h3>
        </div>
        <button className="btn-remove-cart-item" onClick={handleDeleteClick}>
          <MdDelete/>
        </button>
    </Link>
  )
}

export default CartItemCard
