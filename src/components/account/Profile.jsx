import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogout } from '../../redux/authentication/logoutAction'
import { Navigate } from 'react-router-dom'




const Profile = () => {
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
  if(!isAuthenticated) {
    console.log("navigating to login page")
    return <Navigate to="/login?message=you are not logged in&pathname=/profile" />
  }

  return (
    <div style={style}>
      <h2>this is logout</h2>
      <button onClick={handleLogoutClick}>logout</button>
    </div>
  )
}

export default Profile;
