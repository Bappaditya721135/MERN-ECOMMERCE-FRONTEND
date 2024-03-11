export const NAV_OPEN = "NAV_OPEN";
export const NAV_CLOSE = "NAV_CLOSE";
export const TOGGLE_NAV = "TOGGLE_NAV";



export const openNav = () => {
    return ({
        type: NAV_OPEN
    })
}

export const closeNav = () => {
    return ({
        type: NAV_CLOSE,
    })
}


export const toggleNav = () => {
    return ({
        type: TOGGLE_NAV
    })
}