import React from 'react'
import { useDispatch } from 'react-redux'
import { asyncLogout } from '../../redux/authentication/logoutAction'

const Account = () => {
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
