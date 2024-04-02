import axios from "axios";


export const ADD_CART_FETCH = "ADD_CART_FETCH";
export const ADD_CART_FETCH_SUCCESS = "ADD_CART_FETCH_SUCCESS";
export const ADD_CART_FETCH_ERROR = "ADD_CART_FETCH_ERROR";


// const vercelHost = "https://mern-ecommerce-backend-khaki.vercel.app/api/v1/product/add-to-cart"


export const asyncAddToCart = (id, quantity) => {
    console.log(id, quantity)
    return (dispatch) => {
        dispatch({type: ADD_CART_FETCH});
        axios.post("/api/v1/product/add-to-cart", {id, quantity},
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            dispatch({type: ADD_CART_FETCH_SUCCESS, payLoad: res.data})
        }).catch(err => {
            dispatch({type: ADD_CART_FETCH_ERROR, payload: err})
        }) 
    }
}