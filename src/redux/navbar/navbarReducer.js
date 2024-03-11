import { NAV_CLOSE, NAV_OPEN, TOGGLE_NAV } from "./navbarAction";

const initialState = false;

export const navbarReducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_NAV:
            return !state;
        default: return false
    }
}