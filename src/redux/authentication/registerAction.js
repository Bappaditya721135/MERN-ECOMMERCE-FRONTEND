import axios from "axios";

export const REGISTER_FETCH = "REGISTER_FETCH";
export const REGISTER_FETCH_SUCCESS = "REGISTER_FETCH_SUCCESS";
export const REGISTER_FETCH_ERROR = "REGISTER_FETCH_ERROR";


export const asyncRegister = (user) => {
    return (dispatch) => {
        dispatch({type: REGISTER_FETCH})
        axios.post("/api/v1/register",
        JSON.stringify(user),
        {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            dispatch({type: REGISTER_FETCH_SUCCESS, payLoad: res.data.user})
        }).catch(err => {
            dispatch({type: REGISTER_FETCH_ERROR, payLoad: err.response})
        })
    }
}