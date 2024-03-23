import axios from "axios";

export const LOGIN_FETCH = "LOGIN_FETCH";
export const LOGIN_FETCH_SUCCESS = "LOGIN_FETCH_SUCCESS";
export const LOGIN_FETCH_ERROR = "LOGIN_FETCH_ERROR";

const vercelHost = "https://mern-ecommerce-backend-khaki.vercel.app/api/v1/login"

export const asyncLogin = (user) => {
    return (dispatch) => {
        dispatch({type: LOGIN_FETCH})
        axios.post(vercelHost, JSON.stringify(user), {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => {
            dispatch({type: LOGIN_FETCH_SUCCESS, payLoad: res.data.user})
        }).catch(err => {
            dispatch({type: LOGIN_FETCH_ERROR, payLoad: err})
        })
    }
}