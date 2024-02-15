import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogout } from '../../redux/authentication/logoutAction'
import { Navigate } from 'react-router-dom'




const Account = () => {
    const {isAuthenticated} = useSelector(state => state.user);
    const dispatch = useDispatch()

    

    const handleLogoutClick = () => {
        dispatch(asyncLogout())
    }

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh"
    }

  return (
    <div style={style}>
      <h2>this is logout</h2>
      <button onClick={handleLogoutClick}>logout</button>
    </div>
  )
}

export default Account
