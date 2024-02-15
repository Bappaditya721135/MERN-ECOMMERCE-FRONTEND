import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncRegister } from '../../redux/authentication/registerAction'
import { useNavigate, Link, useSearchParams } from 'react-router-dom';

const UserRegistration = () => {
  const {isAuthenticated} = useSelector(state => state.user);
  const navigate = useNavigate()
  
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        avatar: {
            "public_id": "this is public id",
            "url": "this is url"
        }
    })

    const dispatch = useDispatch()

    useEffect(() => {
      if(isAuthenticated) {
        navigate("/")
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
        dispatch(asyncRegister(user))
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" onChange={handleInputChange} value={user.name} />
        <input type="email" name="email" id="email" onChange={handleInputChange} value={user.email} />
        <input type="password" name="password" id="password" onChange={handleInputChange} value ={user.password} />
        <p>account exist? <Link to="/login">login here</Link></p>
        <button>register</button>
      </form>
    </div>
  )
}

export default UserRegistration
