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
    <div className="form__bg">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">Sign In</h3>
        {message && <span className="message">{message}</span>}
        <input className="input__email" type="email" name="email" id="email" placeholder="enter your email" onChange={handleInputChange} value={user.email} />
        <input className="input__password" type="password" name="password" id="password" placeholder="enter your password" onChange={handleInputChange} value={user.password} />
        <p className="new">new here?<Link to="/register">create new account</Link></p>
        <button className="submit__btn">login</button>
      </form>
    </div>
  )
}

export default UserLogin
