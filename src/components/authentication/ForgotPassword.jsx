import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {

    const [email, setEmail] = useState("")
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // SEND THE EMAIL TO THE BACK END  
        axios.post("/api/v1/forgot-password", {
            email,
        }).then(res => {
            navigate("/reset-password")
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="form__bg">
            <form className="form" onSubmit={handleSubmit}>
                <h3 className="form__title">Forget password</h3>
                <input type="email" name="email" className="user-email" id="email" placeholder="enter user email" onChange={handleInputChange} value={email} />
                <button className="submit__btn">get otp</button>
            </form>
        </div>
    )
}