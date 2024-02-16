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
    <div className="form__bg">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">Create new Account</h3>
        <input className="input__name" type="text" name="name" id="name" placeholder="enter your name" onChange={handleInputChange} value={user.name} />
        <input className="input__email" type="email" name="email" id="email" placeholder="enter your email" onChange={handleInputChange} value={user.email} />
        <input className="input__password" type="password" name="password" id="password" placeholder="enter your password" onChange={handleInputChange} value ={user.password} />
        <p className="exist">account exist? <Link to="/login">login here</Link></p>
        <button className="submit__btn">register</button>
      </form>
    </div>
  )
}

export default UserRegistration
