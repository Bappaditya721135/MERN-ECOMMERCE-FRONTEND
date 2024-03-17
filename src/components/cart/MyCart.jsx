import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { getMyCart } from '../../redux/my cart/myCartAction';
import CartItemCard from './cart-item-card/CartItemCard';

function MyCart() {
    const {isAuthenticated} = useSelector(state => state.user);
    const {loading, cart, error} = useSelector(state => state.myCart);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getMyCart())
    }, [])

    const handleOrderClick = () => {
      navigate("/under-development?pathname=/my-cart")
    }


    

    if(!isAuthenticated) {
        return <Navigate to="/login?message=you must login first &pathname=/my-cart" />
    }
  return (
    <div className="cart__section">
      <h2>my cart </h2>

        <div className="cart__container">
          {cart && 
              cart.length > 0 ? 
              cart.map((cartItem, i) => {
                  return <CartItemCard key={i} product={cartItem.product} quantity={cartItem.quantity} />
              }) : <p className="default-text--U">you don't have any items in your cart</p>}

            <div className="cart-order">
              {/* <p>total price: {cart ? getTotalPrice(cart) : 0}</p> */}
              <button onClick={handleOrderClick}>place order</button>
            </div>
        </div>
      
    </div>
  )
}

export default MyCart
