import axios from "axios";

export const LOGOUT_FETCH = "LOGOUT_FETCH";
export const LOGOUT_FETCH_SUCCESS = "LOGOUT_FETCH_SUCCESS";
export const LOGOUT_FETCH_ERROR = "LOGOUT_FETCH_ERROR";


const vercelHost = "https://mern-ecommerce-backend-khaki.vercel.app//api/v1/logout"

export const asyncLogout = () => {
    return (dispatch) => {
        dispatch({type: LOGOUT_FETCH})
        axios.get(vercelHost).then(res => {
            dispatch({type: LOGOUT_FETCH_SUCCESS})
        }).catch(err => {
            dispatch({type: LOGOUT_FETCH_ERROR, payLoad: err})
        })
    }
}