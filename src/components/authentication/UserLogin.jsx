import axios from 'axios'
import React, { useState } from 'react'

const UserLogin = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
    })

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
        axios.post("/api/v1/login", JSON.stringify(user), {headers: {
            'content-type': 'Application/json'
        }}).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err)
        })
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
