import axios from "axios";

export const MY_CART_FETCH = "MY_CART_FETCH";
export const MY_CART_FETCH_SUCCESS = "MY_CART_FETCH_SUCCESS";
export const MY_CART_FETCH_ERROR = "MY_CART_FETCH_ERROR";


// const vercelHost = "https://mern-ecommerce-backend-khaki.vercel.app/api/v1/my-cart"

export const getMyCart = () => {
    return (dispatch) => {
        dispatch({type: MY_CART_FETCH})

        axios.get("/api/v1/my-cart", {
            withCredentials: true,
        }).then(res => {
            dispatch({type: MY_CART_FETCH_SUCCESS, payLoad: res.data.cart})
        }).catch(err => {
            dispatch({type: MY_CART_FETCH_ERROR, payLoad: err})
        })
    }
}