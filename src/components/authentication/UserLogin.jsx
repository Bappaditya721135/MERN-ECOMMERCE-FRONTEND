import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncLogin } from '../../redux/authentication/loginAction'
import {  useNavigate, useSearchParams, Link } from 'react-router-dom'

const UserLogin = () => {
  const {isAuthenticated} = useSelector(state => state.user);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate()
  const message = searchParams.get("message")
  const path = searchParams.get("pathname") || "/";

    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch()


    // CHECK IF ISAUTHENTICATED IS TRUE 
    useEffect(() => {
      if(isAuthenticated) {
        navigate(path);
      }
    }, [isAuthenticated])

    const handleInputChange = (e) => {
        setUser(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(asyncLogin(user))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" onChange={handleInputChange} value={user.email} />
        <input type="password" name="password" id="password" onChange={handleInputChange} value={user.password} />
        {message && <h2>{message}</h2>}
        <p>new here?<Link to="/register">create new account</Link></p>
        <button>login</button>
      </form>
    </div>
  )
}

export default UserLogin
