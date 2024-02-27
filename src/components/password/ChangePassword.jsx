import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ChangePassword = () => {
  const [password, setPassword] = useState({
    originalPassword: "",
    newPassword: "",
    confirmPassword: ""
  })
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setPassword(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put("/api/v1/password/update",JSON.stringify(password),{
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => {
      return navigate("/");
    }).catch(err => {
      console.log(err)
    })
 
  }
  return (
    <div className="form__bg">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="form__title">cahnge password</h3>

        <label htmlFor="password">previous password</label>
        <input className="input__password" type="plassword" name="originalPassword" id="password" placeholder="enter previous password" onChange={handleInputChange} value={password.originalPassword} />
        
        <label htmlFor="new-password">new password</label>
        <input className="input__password" type="password" name="newPassword" id="new-password" placeholder="enter new password" onChange={handleInputChange} value={password.newPassword} />

        <label htmlFor="confirm-password">confirm password</label>
        <input className="input__password" type="password" name="confirmPassword" id="confirm-password" placeholder="confirm new password" onChange={handleInputChange} value={password.confirmPassword} />

        <button className="submit__btn">update password</button>
      </form>
    </div>
  )
}

export default ChangePassword
