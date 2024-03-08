import axios from "axios";

export const MY_CART_FETCH = "MY_CART_FETCH";
export const MY_CART_FETCH_SUCCESS = "MY_CART_FETCH_SUCCESS";
export const MY_CART_FETCH_ERROR = "MY_CART_FETCH_ERROR";




export const getMyCart = () => {
    return (dispatch) => {
        dispatch({type: MY_CART_FETCH})
        console.log("1")

        axios.get("/api/v1/my-cart").then(res => {
            console.log("2")
            dispatch({type: MY_CART_FETCH_SUCCESS, payLoad: res.data.cart})
        }).catch(err => {
            console.log(3)
            dispatch({type: MY_CART_FETCH_ERROR, payLoad: err})
        })
    }
}