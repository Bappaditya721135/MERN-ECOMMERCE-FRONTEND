import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const UnderDevComponent = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const pathname = searchParams.get("pathname") || "/"


    const handleClick = () => {
        navigate(pathname)
    }

    const style = {
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const btnStyle = {
        cursor: "pointer"
    }
  return (
    <div style={style}>
      <h3>this feature is under Development</h3>
      <button onClick={handleClick} style={btnStyle}>go back</button>
    </div>
  )
}

export default UnderDevComponent
