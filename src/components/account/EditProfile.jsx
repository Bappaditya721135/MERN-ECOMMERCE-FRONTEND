import React from 'react'
import { useSelector } from 'react-redux'

const EditProfile = () => {
  const state = useSelector(state => state.user);
  console.log(state);
  return (
    <div className="form__bg">
      <form className="form">
        <h3 className="form__title">edit profile</h3>
        <label htmlFor="name">name</label>
        <input className="input__name" type="text" name="name" id="name" placeholder="enter your name" />
        <label htmlFor="email">email</label>
        <input className="input__email" type="email" name="email" id="email" placeholder="enter your email" />
        <button className="submit__btn">update</button>
      </form>
    </div>
  )
}

export default EditProfile
