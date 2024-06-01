import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function ResetPassword() {

    const [formData, setFromData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        otp: "",
    })
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setFromData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("/api/v1/reset-password",JSON.stringify(formData),{
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            navigate("/")
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="form__bg">
            <form className="form" onSubmit={handleSubmit}>
                <h3 className="form__title">reset password</h3>
                <input type="email" name="email" id="email" placeholder="enter user email" onChange={handleInputChange} value={formData.email} />
                <input type="password" name="password" id="password" placeholder="enter your password" onChange={handleInputChange} value={formData.password} />
                <input type="password" name="confirmPassword" id="confirm-password" placeholder="confirm your password" onChange={handleInputChange} value={formData.confirmPassword} />
                <input type="text" name="otp" id="otp" placeholder="enter the otp" onChange={handleInputChange} value={formData.otp} />
                <button className="submit__btn">reset password</button>
            </form>
        </div>
    )
}