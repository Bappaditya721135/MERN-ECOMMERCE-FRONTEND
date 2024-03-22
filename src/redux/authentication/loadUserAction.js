import axios from "axios";

export const LOAD_USER = "LOAD_USER";
export const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
export const LOAD_USER_ERROR = "LOAD_USER_ERROR";


const vercelHost = "https://mern-ecommerce-backend-khaki.vercel.app/api/v1/user/me"
export const asyncLoadUser = () => {
    return (dispatch) => {
        dispatch({type: LOAD_USER})
        axios.get(vercelHost).then(res => {
            console.log("load res")
            console.log(res)
            dispatch({type: LOAD_USER_SUCCESS, payLoad: res.data.user})
        }).catch(err => {
            dispatch({type: LOAD_USER_ERROR, payLoad: err})
        })
    }
}