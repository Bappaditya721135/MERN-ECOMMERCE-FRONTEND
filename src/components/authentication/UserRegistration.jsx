import axios from 'axios'
import React, { useState } from 'react'

const UserRegistration = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        avatar: {
            "public_id": "this is public id",
            "url": "this is url"
        }
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
        axios.post("/api/v1/register", JSON.stringify(user), {
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            console.log(res.data)
        }).catch(err => {
            console.log(err);
        })
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="name" onChange={handleInputChange} value={user.name} />
        <input type="email" name="email" id="email" onChange={handleInputChange} value={user.email} />
        <input type="password" name="password" id="password" onChange={handleInputChange} value ={user.password} />
        <button>register</button>
      </form>
    </div>
  )
}

export default UserRegistration
