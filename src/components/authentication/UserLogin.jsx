import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { asyncLogin } from '../../redux/authentication/loginAction'

const UserLogin = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch()

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
        <button>login</button>
      </form>
    </div>
  )
}

export default UserLogin
