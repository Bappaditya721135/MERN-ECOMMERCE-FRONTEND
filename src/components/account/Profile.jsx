import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogout } from '../../redux/authentication/logoutAction'
import { Navigate, Link } from 'react-router-dom'




const Profile = () => {
    const {isAuthenticated, user, loading, error} = useSelector(state => state.user);
    console.log(isAuthenticated)
    console.log(user)
    console.log(error)
    console.log(loading)
    const dispatch = useDispatch()

    

    const handleLogoutClick = () => {
        dispatch(asyncLogout())
    }


  if(!isAuthenticated) {
    console.log("navigating to login page")
    return <Navigate to="/login?message=you are not logged in&pathname=/profile" />
  }

  return (
    <div className="profile--container">
      <h3 className="profile__title">My Profile</h3>
      <div className="profile">
      <div className="profile-img--section">
        <div className="img--container"></div>
      </div>
      <div className="profile__details">
        <div className="name__section">
          <p>Full Name</p>
          <p className="profile__name">{user.name}</p>
        </div>
        <div className="email__section">
          <p>Email</p>
          <p className="profile__email">{user.email}</p>
        </div>
        <div className="link__section">
          <Link to="/orders">my orders</Link>
          <Link to="/change-password">change password</Link>
        </div>
      </div>
      <div className="logout-edit--section">
      <Link to="/edit-profile">edit profile</Link>
      <button onClick={handleLogoutClick}>logout</button>
      </div>
    </div>
    </div>
  )
}

export default Profile;
