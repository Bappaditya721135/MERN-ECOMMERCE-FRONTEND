import axios from "axios";

export const PRODUCT_FETCH_ERROR = "PRODUCT_FETCH_ERROR";
export const PRODUCT_FETCH = "PRODUCT_FETCH";
export const PRODUCT_FETCH_SUCCESS = "PRODUCT_FETCH_SUCCESS";


// ACTION CREATORS  
const productFetch = () => {
    return {
        type: PRODUCT_FETCH,
    }
}

const productFetchSuccess = (products) => {
    return {
        type: PRODUCT_FETCH_SUCCESS,
        payLoad: products,
    }
}

const productFetchError = (error) => {
    return {
        type: PRODUCT_FETCH_ERROR,
        payLoad: error,
    }
}

const vercelHost = "https://mern-ecommerce-backend-khaki.vercel.app/api/v1/product"
const renderHost = "https://mern-ecommerce-backend-0698.onrender.com/api/v1/product"

// ASYNC ACTION CREATOR 
export const asyncProductAction = () => {
    return (dispatch) => {
        dispatch(productFetch());
        axios.get(vercelHost).then(res => {
            dispatch(productFetchSuccess(res.data.products))
        }).catch(err => {
            dispatch(productFetchError(err))
        })
    }
}