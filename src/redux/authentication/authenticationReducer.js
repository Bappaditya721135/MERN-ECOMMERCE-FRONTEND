import { LOAD_USER, LOAD_USER_ERROR, LOAD_USER_SUCCESS } from "./LoadUserAction"
import { LOGIN_FETCH, LOGIN_FETCH_ERROR, LOGIN_FETCH_SUCCESS } from "./loginAction"
import { LOGOUT_FETCH, LOGOUT_FETCH_ERROR, LOGOUT_FETCH_SUCCESS } from "./logoutAction"
import { REGISTER_FETCH, REGISTER_FETCH_ERROR, REGISTER_FETCH_SUCCESS } from "./registerAction"


const initialState = {
    loading: false,
    user: null,
    isAuthenticated: false,
    error: null,
}

export const authenticationReducer = (state=initialState, action) => {
    switch(action.type) {
        case LOGIN_FETCH:
        case REGISTER_FETCH:
        case LOAD_USER:
        case LOGOUT_FETCH:
            return {
                loading: true,
            }
        case LOGIN_FETCH_SUCCESS:
        case REGISTER_FETCH_SUCCESS:
        case LOAD_USER_SUCCESS:
            console.log("load reducer")
            console.log(action)
            return {
                loading: false,
                isAuthenticated: true,
                user: action.payLoad,
                error: null,
            }
        case LOGIN_FETCH_ERROR:
        case REGISTER_FETCH_ERROR:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payLoad,
            }
        case LOAD_USER_ERROR:
        case LOGOUT_FETCH_SUCCESS:
            return {
                loading: false,
                isAuthenticated: false,
                user: null,
                error: null,
            }
        case LOGOUT_FETCH_ERROR:
            return {
                ...state,
                error: action.payLoad
            }
        default: return state;
    }
}