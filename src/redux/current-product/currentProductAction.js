import axios from "axios";

export const CURRENT_PRODUCT_FETCH = "CURRENT_PRODUCT_FETCH";
export const CURRENT_PRODUCT_FETCH_SUCCESS = "CURRENT_PRODUCT_FETCH_SUCCESS";
export const CURRENT_PRODUCT_FETCH_ERROR = "CURRENT_PRODUCT_FETCH_ERROR";


export const asyncCurrentProductFetch = (id) => {
    return (dispatch) => {
        dispatch({type: CURRENT_PRODUCT_FETCH})
        axios.get(`/api/v1/product/${id}`).then(res => {
            dispatch({type: CURRENT_PRODUCT_FETCH_SUCCESS, payLoad: res.data})
        }).catch(err => {
            dispatch({type: CURRENT_PRODUCT_FETCH_ERROR, payLoad: err})
        })
    }
}
